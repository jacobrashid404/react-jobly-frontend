import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext.js";

/** Homepage for Jobly
 *
 * Props: None
 * State: None
 *
 * RoutesList -> Homepage
 */

function Homepage() {
  const { user } = useContext(userContext);
  console.log("* Homepage");
  return (
    <div>
      <h1>Jobly!</h1>
      <h3>All the jobs in one convenient place</h3>
      {user && <h2>Welcome back, {user.firstName}!</h2>}
      {!user &&
        <>
          <Link to={'/login'} className="btn btn-primary fw-bold me-3">Login</Link>
          <Link to={'/signup'} className="btn btn-primary fw-bold me-3">Sign Up</Link>
        </>
      }
    </div>
  );
}

export default Homepage;