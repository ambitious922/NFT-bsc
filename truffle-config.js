
const Web3 = require('web3');
const web3 = new Web3();
const path = require("path");
require('dotenv').config();

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env["MNEMONIC"];
var INFURA_KEY = process.env["INFURA_KEY"];

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777"
    },
    kovan: {
      // networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(mnemonic,
            `https://kovan.infura.io/v3/${INFURA_KEY}`),
      network_id: 42,
      confirmations: 2,
      timeoutBlocks: 20000000,
      skipDryRun: true
    },
    live: {
      provider: () => new HDWalletProvider(mnemonic, 
            `https://mainnet.infura.io/v3/${INFURA_KEY}`),
      network_id: 1,
      confirmations: 2,
      timeoutBlocks: 20000000,
      skipDryRun: true,
      gasPrice: web3.utils.toWei('10', 'gwei')
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, 'https://bsc-dataseed.binance.org'),
      network_id: 56,
    },
    bsc_testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
      network_id: 97,
    }   
  },
  compilers: {
    solc: {
      version: ">=0.4.22 <0.9.0",
      settings: {
        optimizer: {
          enabled: false,
          runs: 150000   // Optimize for how many times you intend to run the code
        }
      },
    },
  },
};
