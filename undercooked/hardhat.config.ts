require('@nomiclabs/hardhat-ethers')
require('@openzeppelin/hardhat-upgrades');
import * as dotenv from "dotenv"

import { HardhatUserConfig } from "hardhat/config"

import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import "solidity-coverage"

dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {enabled: true},
    }
  },
  networks: {
    local: {
      url: "http://localhost:8545",
    }
  },
  paths: { 
    sources: './contracts'
  }
}

export default config;
