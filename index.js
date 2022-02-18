// Challenge as proposed by Wintermute
// Written by Brandon Grant - https://github.com/Artiizan

const LendingPoolV2Artifact = require('@aave/protocol-v2/artifacts/contracts/protocol/lendingpool/LendingPool.sol/LendingPool.json');
// ABI Docs: https://docs.aave.com/developers/the-core-protocol/lendingpool#getuserconfiguration
var ethers = require('ethers');

// Environment Variables
const userAddress = process.env.userAddress; // User Wallet Address
const contractAddress = process.env.contractAddress || '0x4F01AeD16D97E3aB5ab2B501154DC9bb0F1A5A2C'; // Address of the AAVE lendingpool contract
const healthFactorThreshold = parseFloat(process.env.healthFactorThreshold) || 1.5

// Ethers Config
var provider = new ethers.providers.JsonRpcProvider(process.env.jsonRpcUrl || 'https://api.avax.network/ext/bc/C/rpc');

// AAVE Contract Config
const abi = LendingPoolV2Artifact.abi;
var aaveContract = new ethers.Contract(contractAddress, abi, provider);

// Getting the current Block
provider.getBlockNumber().then(async function(blockNumber) {
  const network = await provider.getNetwork();
  if (network.chainId == 43114 && blockNumber < 11096646) {
    console.log('Something is wrong, block number is too low')
    process.exit(2)
  }
  // Getting the Account Information
  aaveContract.getUserAccountData(userAddress).then(function(userAccountData) {
    var healthFactorHex = userAccountData.healthFactor._hex
    var healthFactorWei = ethers.BigNumber.from(healthFactorHex)
    var healthFactor = healthFactorWei / ethers.constants.WeiPerEther
    if (healthFactor < healthFactorThreshold) {
      console.error('Error: health factor ', healthFactor.toString(), ' is lower than threshold ', healthFactorThreshold)
      process.exit(1)
    }
    if (healthFactorHex == '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff') {
      console.log("PLEASE NOTE: Your health factor is the maximum uint256 value because you have not borrowed any coins from AAVE.")
      // https://github.com/aave/aave-protocol/blob/master/contracts/lendingpool/LendingPoolDataProvider.sol#L328
    }
  });
});

