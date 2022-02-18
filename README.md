# AAVE Account Health Factor Check

Repeatable solution to find the current Health Factor of a specified AAVE Wallet Address. Also returns the current block for fact checking.
This work was done as a project for [Wintermute Trading](https://wintermute.com/).

## Solution Requirements

- Javascript
- [@aave/protocol-v2 (^1.0.1)](https://www.npmjs.com/package/@aave/protocol-v2)
- [ethers (^5.2.0)](https://www.npmjs.com/package/ethers)

## Environment Variables

- **userAddress**: This is the wallet address of the user you would like to check the Health Factor of.
- **contractAddress**: The address on the network of the [AAVE LendingPool Smart Contract](https://docs.aave.com/developers/v/2.0/deployed-contracts/deployed-contracts).
    *The current values that you can use for the mainnets (please check the above link as these may be outdated):*
  - Ethereum Mainmarket: `0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9`
  - Polygon (Matic) Mainmarket: `0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf`
  - Avalanche Mainmarket: `0x4F01AeD16D97E3aB5ab2B501154DC9bb0F1A5A2C`
- **jsonRpcUrl**: JSON RPC endpoint of the node. 
  - Ethereum and Polygon (Matic) - you can use infura nodes. They offer both ethereum and polygon nodes for free. Get your own url from the [Infura Website](https://infura.io/dashboard).
  - Avalanche - you can use [https://api.avax.network/ext/bc/C/rpc](https://api.avax.network/ext/bc/C/rpc) as the endpoint, it is operated by 

## Formatting

### Health Factor

The health factor can be calculated manually using the [AAVE formula](https://docs.aave.com/risk/asset-risk/risk-parameters#health-factor). In this project however we are querying the [AAVE LendingPool smart contract](https://github.com/aave/aave-protocol/blob/master/contracts/lendingpool/LendingPoolDataProvider.sol#L322) directly and making use of it's ability to return a health factor for a given account.

The health factor is shown in the console in 3 formats:

- **hex**: This is the format of the health factor returned by the smart contract.
- **decimal**: This is the hex formatted using the Javascript BigInt() method
- **as ether**: The health factor in the AAVE UI is shown as "a percent". However, it is just the above decimal formatted using a fromWeiToEther Command (Also known as moving the decimal place 18 places). 

## Author

Brandon Grant\
[Email](mailto:brandon.kevin.grant@gmail.com)\
[Project Github](https://github.com/Artiizan/AAVE_Account_Health_Factor)