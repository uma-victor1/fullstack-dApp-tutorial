import React, { useState } from 'react'


function CreateResource({ toggleModal, contract }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    contract.addResource(title, url, description)
  }

  return (
    <div>
      {toggleModal === true && (
        <div className="addresource">
          <form onSubmit={handleSubmit}>
            <label>
              Enter resource title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Enter resource url:
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </label>
            <label>
              Enter resource description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <input type="submit" className="submit" />
          </form>
        </div>
      )}
    </div>
  )
}

export default CreateResource
