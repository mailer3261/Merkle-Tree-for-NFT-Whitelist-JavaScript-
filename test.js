const { MerkleTree } = require('merkletreejs')
const { toHex } = require("ethereum-cryptography/utils");
const keccak256 = require('keccak256');


let whitelistAddresses = [
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  ];


  const leafNodes = whitelistAddresses.map(addr=> keccak256(addr))

  const tree = new MerkleTree(leafNodes,keccak256,{ sortPairs: true})
  console.log(tree.toString())
  const root = tree.getRoot().toString('hex')
  console.log(root.toString('hex'))

  
  const leaf = keccak256('0x5B38Da6a701c568545dCfcB03FcB875f56beddC4')
  console.log(leaf.toString('hex'))
  const proof = tree.getHexProof(leaf)
  console.log(proof)
  console.log(tree.verify(proof, leaf, root)) // true

