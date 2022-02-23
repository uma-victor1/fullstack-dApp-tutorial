//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;  // Solidity files have to start with this pragma.

import "hardhat/console.sol";

// This is the where all the fun stuff happens
contract ResourceShare {

 struct Resource{
    uint id;
    address creator;
    string title;
    string url;
    string description;
    int64 total_votes;
}
  

  
Resource[] private resources;

 uint numResources;

  function addResource(string memory title, string memory url, string memory description) public returns (uint resourceID) {
   resourceID = numResources++;
   Resource storage resource = resources[resourceID];
   resource.id = resourceID;
   resource.creator = msg.sender;
   resource.title = title;
   resource.url = url;
   resource.description = description;
   resource.total_votes = 0;
  }

  function listResource() external view returns(Resource[] memory) {
     return resources;
  }

  
}