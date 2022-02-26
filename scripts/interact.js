
const { ethers } = require("hardhat");


const ResourceShareArtifact = require('../src/artifacts/contracts/Resource.sol/ResourceShare.json')

let provider = new ethers.providers.getDefaultProvider('http://127.0.0.1:8545/')
let privatekey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
let wallet = new ethers.Wallet(privatekey,provider);
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'


const abi = ResourceShareArtifact.abi;


let contract = new ethers.Contract(
    contractAddress,
    abi,
    wallet
)


async function getTotalResource() {
    const total = await contract.numResource();
    console.log(total);
}

async function getResources(){

}

getTotalResource()
