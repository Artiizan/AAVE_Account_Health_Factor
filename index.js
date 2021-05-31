const LendingPoolV2Artifact = require('@aave/protocol-v2/artifacts/contracts/protocol/lendingpool/LendingPool.sol/LendingPool.json');
const Web3 = require("web3");

const web3 = new Web3();
const aave = new web3.eth.Contract(
	LendingPoolV2Artifact.abi
);

console.log(aave.methods.getUserAccountData("0x1b7835d2074914161dD6A2d48E393Be1dbf296D1"));