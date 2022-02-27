import ResourceArtifact from "../src/artifact/contracts/Resource.sol/ResourceShare.json"
import {ethers} from 'ethers'
const resourceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
async function _intializeContract(init) {
 // We first initialize ethers by creating a provider using window.ethereum
 // When, we initialize the contract using that provider and the token's
 // artifact. You can do this same thing with your contracts.
 const contract = new ethers.Contract(
   resourceAddress,
   ResourceArtifact.abi,
   init
 );

 return contract
}
let contract = await _intializeContract(signer);
console.log(contract, 'here we are');

export default contract;