# AAVE Account Health Factor Check

Repeatable solution to find the current Health Factor of a specified AAVE Wallet Address. 

## Solution Requirements

- Javascript
- [@aave/core-v3](https://www.npmjs.com/package/@aave/core-v3)
- [ethers (^5.2.0)](https://www.npmjs.com/package/ethers)

Install with ``npm install``

## Environment Variables

- **userAddress**: This is the wallet address of the user you would like to check the Health Factor of.
- **contractAddress**: The address on the network of the [AAVE Pool Smart Contract](https://docs.aave.com/developers/deployed-contracts/deployed-contracts) for V3.
    *The current values that you can use for the mainnets (please check the above link as these may be outdated):*
  - Avalanche Mainmarket: `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
- 
  - **jsonRpcUrl**: JSON RPC endpoint of the node. 
  
  - For others, you can use infura nodes. They offer both ethereum and polygon nodes for free. Get your own url from the [Infura Website](https://infura.io/dashboard).
  
  - Avalanche - you can use [https://api.avax.network/ext/bc/C/rpc](https://api.avax.network/ext/bc/C/rpc) as the endpoint, it is operated by
- **healthFactorThreshold**: What health factor is acceptable. If health factor is lower than this threshold, error is printed and process exits with error code Default: 1.5

## Formatting

### Health Factor

The health factor is obtained by querying the [AAVE Pool smart contract](https://docs.aave.com/developers/core-contracts/pool) and making use of it's ability to return a health factor for a given account.

## Integration with monitoring

I use my own [signal-monitoring](https://github.com/jooray/signal-monitoring) infrastructure to get notified using Signal when health decreases.

Check out an example setup in examples directory to see how to set it up (after setting up signal-monitoring first).

## Author

Brandon Grant\
[Email](mailto:brandon.kevin.grant@gmail.com)\
with modifications by Juraj Bednar\
[Project Github](https://github.com/jooray/AAVE_Account_Health_Factor)