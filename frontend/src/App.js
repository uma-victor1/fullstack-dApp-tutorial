import './App.css'
import ResourceArtifact from '../src/artifact/contracts/Resource.sol/ResourceShare.json'
import { ethers } from 'ethers'
import ListResources from './components/ListResources'
import CreateResource from './components/CreateResource'
import { useEffect, useState } from 'react'

const resourceAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

function App() {
  const [resourceData, setResourceData] = useState([])
  const [toggleModal, setToggleModal] = useState(false)
  const [contract, setContract] = useState()

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
  }

  function addResource() {
    setToggleModal(!toggleModal)
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  async function _intializeContract(init) {
    // We first initialize ethers by creating a provider using window.ethereum
    // When, we initialize the contract using that provider and the token's
    // artifact. You can do this same thing with your contracts.
    const contract = new ethers.Contract(
      resourceAddress,
      ResourceArtifact.abi,
      init,
    )

    return contract
  }

  useEffect(() => {
    // in this case, we only care to query the contract when signed in
    if (typeof window.ethereum !== 'undefined') {
      (async function getResources() {
        await requestAccount()
        const contract = await _intializeContract(signer)
        const resourcedata = await contract.getResources()
        const resources = [...resourcedata]
        setContract(contract)
        setResourceData(resources)
      })()
    }
  }, [])

  return (
    <>
      <header>
        <button onClick={addResource}>Add a resource</button>
      </header>
      <main>
        <CreateResource toggleModal={toggleModal} contract={contract} />
        <section className="resources">
          {resourceData.map((resource, id) => {
            return (
              <div key={id}>
                <ListResources resource={resource} contract={contract} />
              </div>
            )
          })}
        </section>
      </main>
    </>
  )
}

export default App
