// Challenge as proposed by Wintermute
// Written by Brandon Grant - https://github.com/Artiizan

const LendingPoolV2Artifact = require('@aave/protocol-v2/artifacts/contracts/protocol/lendingpool/LendingPool.sol/LendingPool.json');
// ABI Docs: https://docs.aave.com/developers/the-core-protocol/lendingpool#getuserconfiguration
var ethers = require('ethers');

// Environment Variables
const userAddress = process.env['userAddress'] // User Wallet Address
const contractAddress = process.env['contractAddress']; // Address of the AAVE lendingpool contract
// https://docs.aave.com/developers/v/2.0/deployed-contracts/deployed-contracts

// Ethers Config
var provider = new ethers.providers.JsonRpcProvider(process.env['infuraProjectUrl']);

// AAVE Contract Config
const abi = LendingPoolV2Artifact.abi;
var aaveContract = new ethers.Contract(contractAddress, abi, provider);

// Getting the current Block
provider.getBlockNumber().then(function(blockNumber) {
	console.log('wallet address: ' + userAddress);
	console.log('block number:   ' + blockNumber);
});

// Getting the Account Information
aaveContract.getUserAccountData(userAddress).then(function(userAccountData) {
	var healthFactorHex = userAccountData['healthFactor']['_hex'];
	console.log('health factor:  ' + BigInt(healthFactorHex));
	if (healthFactorHex == '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff') {
		console.log("PLEASE NOTE: Your health factor is the maximum uint256 value because you have not borrowed any coins from AAVE.")
		// https://github.com/aave/aave-protocol/blob/master/contracts/lendingpool/LendingPoolDataProvider.sol#L328
	}
});