function ListResources({ resource, contract }) {

 async function vote(id) {
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