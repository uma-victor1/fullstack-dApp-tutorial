

function ListResources({ resource, contract }) {
  console.log(resource);
  console.log(contract, "list resources");

 async function vote(id) {

  console.log(contract.address, "address of resource creator");
  console.log(contract.numResource(), "number of resource");
  await contract.voteResource(id)
  }
  return (
    <div className="project">
      <h2>{resource.title}</h2>{' '}
      <span className="creator">{resource.creator}</span>
      <h3>description:</h3>
      <p>{resource.description}</p>
      <h4>Link:<a href={resource.url}>{resource.url}</a></h4>
      <h4>Votes: {resource.total_votes}</h4>
      <button
        onClick={(id) => vote(resource.id)}

      >
        Vote
      </button>
    </div>
  )
}

export default ListResources