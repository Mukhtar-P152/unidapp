pragma solidity ^0.4.17;

contract SimpleStore {
  uint storedData;

  function set(uint x) {
    storedData = x;
  }

  function get() constant returns (uint retVal) {
    return storedData;  
  }
}
