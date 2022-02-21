# AAVE Account Health Factor Check

Repeatable solution to find the current Health Factor of a specified AAVE Wallet Address. 

## Solution Requirements

- Javascript
- [@aave/protocol-v2 (^1.0.1)](https://www.npmjs.com/package/@aave/protocol-v2)
- [ethers (^5.2.0)](https://www.npmjs.com/package/ethers)

Install with ``npm install``

## Environment Variables

- **userAddress**: This is the wallet address of the user you would like to check the Health Factor of.
- **contractAddress**: The address on the network of the [AAVE LendingPool Smart Contract](https://docs.aave.com/developers/v/2.0/deployed-contracts/deployed-contracts).
    *The current values that you can use for the mainnets (please check the above link as these may be outdated):*
  - Ethereum Mainmarket: `0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9`
  - Polygon (Matic) Mainmarket: `0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf`
  - Avalanche Mainmarket: `0x4F01AeD16D97E3aB5ab2B501154DC9bb0F1A5A2C`
- 
  - **jsonRpcUrl**: JSON RPC endpoint of the node. 
  
  - Ethereum and Polygon (Matic) - you can use infura nodes. They offer both ethereum and polygon nodes for free. Get your own url from the [Infura Website](https://infura.io/dashboard).
  
  - Avalanche - you can use [https://api.avax.network/ext/bc/C/rpc](https://api.avax.network/ext/bc/C/rpc) as the endpoint, it is operated by
- **healthFactorThreshold**: What health factor is acceptable. If health factor is lower than this threshold, error is printed and process exits with error code Default: 1.5

## Formatting

### Health Factor

The health factor is obtained by querying the [AAVE LendingPool smart contract](https://github.com/aave/aave-protocol/blob/master/contracts/lendingpool/LendingPoolDataProvider.sol#L322) and making use of it's ability to return a health factor for a given account.

## Integration with monitoring

I use my own [signal-monitoring](https://github.com/jooray/signal-monitoring) infrastructure to get notified using Signal when health decreases.

Check out an example setup in examples directory to see how to set it up (after setting up signal-monitoring first).

## Author

Brandon Grant\
[Email](mailto:brandon.kevin.grant@gmail.com)\
with modifications by Juraj Bednar\
[Project Github](https://github.com/jooray/AAVE_Account_Health_Factor)