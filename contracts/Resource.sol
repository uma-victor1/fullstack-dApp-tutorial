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
  

  
mapping(uint => Resource) resources;

 uint numResources;

 constructor () public {
     numResources = 0;
 }

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

  function listResource() public view returns(Resource[] memory) {
     return resources;
  }

    // string private greeting;

    // function greet() public view returns (string memory) {
    //     return greeting;
    // }

    // function setGreeting(string memory _greeting) public {
    //     console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
    //     greeting = _greeting;
    // }
}