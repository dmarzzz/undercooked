import { Contract, Wallet } from "ethers";
import { config } from ".";
import { deployConfigs } from "./deploy";
import { getDeployer } from "../scripts/utils";

const RPC_END_POINT = config.RPC_ENDPOINTS[deployConfigs.NETWORK]

export const deployer_account_1: Wallet = getDeployer(
    RPC_END_POINT,
    config.ACCOUNTS[1].PRIVATE_KEY
  );

  export const trader_account_1: Wallet = getDeployer(
    RPC_END_POINT,
    config.ACCOUNTS[2].PRIVATE_KEY
  );

  export const trader_account_2: Wallet = getDeployer(
    RPC_END_POINT,
    config.ACCOUNTS[3].PRIVATE_KEY
  );

  export const trader_account_3: Wallet = getDeployer(
    RPC_END_POINT,
    config.ACCOUNTS[4].PRIVATE_KEY
  );

  export const trader_account_4: Wallet = getDeployer(
    RPC_END_POINT,
    config.ACCOUNTS[5].PRIVATE_KEY
  );