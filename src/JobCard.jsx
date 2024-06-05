/** Job card
 *
 * Props: job object
 * State: None
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
  console.log("* JobCard", job);


  return (
    <div>
      <p>{job.title}</p>
      <p>{job.salary}</p>
      <p>{job.equity}</p>
    </div>
  );
}

export default JobCard;