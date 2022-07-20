/* eslint-disable camelcase */

import { Contract, Wallet, BigNumber } from "ethers";
import { ethers } from "hardhat";
import { deployConfigs } from "../configs/deploy";
import { config } from "../configs";
import {
  deployer_account_1,
  trader_account_1,
  trader_account_3,
  trader_account_4
} from "../configs/accounts";
import { deploy } from "./utils";

async function main(): Promise<void> {
  // // ****************** INTRO ***********************************

  console.log(``)
  console.log(``)
  console.log(``)
  console.log('********* Cook Em Up !! *********')
  console.log(`Cooking from ${deployer_account_1.address}`)
  console.log(`On bbq  ${deployConfigs.NETWORK}`)
  console.log(`Starting Ingredients are  ${deployConfigs.AMOUNT_BASE_TOKEN} ${deployConfigs.SYMBOL_BASE_TOKEN}`)
  console.log(``)
  console.log(``)
  console.log(`Lighting grill now`)
  console.log(``)
  console.log(``)
  console.log(``)

  // // **************** SETTINGS ***********************************

  const tokenA_mintAmount = ethers.utils.parseUnits(deployConfigs.AMOUNT_TOKEN_A, 18)
  const tokenB_mintAmount = ethers.utils.parseUnits(deployConfigs.AMOUNT_TOKEN_B, 18)
  console.log(tokenA_mintAmount)

  // // **************** CALCULATIONS *******************************

  const baseTokenPerPool = ethers.utils.parseUnits(deployConfigs.AMOUNT_BASE_TOKEN, 18)
  const tokenAPerPool = ethers.utils.parseUnits(deployConfigs.POOL_AMOUNT_A, 18)
  const tokenBPerPool = ethers.utils.parseUnits(deployConfigs.POOL_AMOUNT_B, 18)

  const baseTokenMin = baseTokenPerPool
  const tokenAMin = tokenAPerPool
  const tokenBMin = tokenBPerPool

  // // **************** TRADING SETTINGS *******************************

  const firstTrade = {
    amount0Out: 1,
    amount1Out: 1,
    to: '0x',
    data: 'idk'
  }

  // // **************** CONTRACT DEPLOYMENT ************************

  // // * Undercook ERC20 token 1
  const token_A: Contract = await deploy(
    deployer_account_1,
    "UndercookedERC20PresetMinterPauser",
    [deployConfigs.NAME_TOKEN_A, deployConfigs.SYMBOL_TOKEN_A]
  );
  await token_A.deployed();
  console.log(
    `${deployConfigs.NAME_TOKEN_A} token (slighty raw) deployed to: ${token_A.address}`
  );

  // // * Undercook ERC20 token 2
  const token_B: Contract = await deploy(
    deployer_account_1,
    "UndercookedERC20PresetMinterPauser",
    [deployConfigs.NAME_TOKEN_B, deployConfigs.SYMBOL_TOKEN_B]
  );
  await token_B.deployed();
  console.log(
    `${deployConfigs.NAME_TOKEN_B} token (very under prepared) deployed to: ${token_B.address}`
  );

  // // **************** TRANSACTIONS  ************************

  // 1. Mint tokens from 2 contracts

  const result_mintTokenA = await token_A.mint(
    deployer_account_1.address,
    tokenA_mintAmount,
    {
      gasPrice: deployConfigs.GAS_PRICE,
      gasLimit: deployConfigs.GAS_LIMIT
    }
  );
  await result_mintTokenA.wait(5);
  console.log(
    `Chef grilled up  ${deployConfigs.AMOUNT_TOKEN_A} ${deployConfigs.NAME_TOKEN_A} tokens`
  );

  const result_mintTokenB = await token_B.mint(
    deployer_account_1.address,
    tokenB_mintAmount,
    {
      gasPrice: deployConfigs.GAS_PRICE,
      gasLimit: deployConfigs.GAS_LIMIT
    }
  );
  await result_mintTokenB.wait(5);
  console.log(
    `Chef grilled up ${deployConfigs.AMOUNT_TOKEN_B} ${deployConfigs.NAME_TOKEN_B} tokens`
  );

  // 2. Set Up 3 Uniswap Pools 
  const factory = await ethers.getContractAt(
    "IUniswapV2Factory",
    config.CONTRACTS[deployConfigs.NETWORK].UNI_FACTORY_ADDR,
    deployer_account_1
  );

  //    - create Pool 1: Token A & Token B
  const result_Create_Pool_1 = await factory.createPair(
    token_A.address,
    token_B.address,
    {
      gasPrice: deployConfigs.GAS_PRICE,
      gas: deployConfigs.GAS_LIMIT
    }
  );
  await result_Create_Pool_1.wait(5);
  console.log(
    `Bring out your floaties,  ${deployConfigs.NAME_TOKEN_A} ${deployConfigs.NAME_TOKEN_B} pool is open for business`
  );

  //    - create Pool 2: Token 1 & WETH
  const result_Create_Pool_2 = await factory.createPair(
    token_A.address,
    config.CONTRACTS[deployConfigs.NETWORK].WETH_ADDR,
    {
      gasPrice: deployConfigs.GAS_PRICE,
      gasLimit: deployConfigs.GAS_LIMIT
    }
  );
  await result_Create_Pool_2.wait(5);
  console.log(
    `Bring out your floaties,  ${deployConfigs.NAME_TOKEN_A} ${deployConfigs.SYMBOL_BASE_TOKEN} pool is open for business`
  );

  //    - create Pool 3: Token 2 & WETH
  const result_Create_Pool_3 = await factory.createPair(
    token_B.address,
    // TODO : FIX THIS BEING HARDCODED TO KOVAN
    config.CONTRACTS[deployConfigs.NETWORK].WETH_ADDR,
    {
      gasPrice: deployConfigs.GAS_PRICE,
      gasLimit: deployConfigs.GAS_LIMIT
    }
  );
  await result_Create_Pool_3.wait(5);
  console.log(
    `Bring out your floaties,  ${deployConfigs.NAME_TOKEN_B} ${deployConfigs.SYMBOL_BASE_TOKEN} pool is open for business`
  );


  // 3. Fund Pools
  const router = await ethers.getContractAt(
    "IUniswapV2Router01",
    config.CONTRACTS[deployConfigs.NETWORK].UNI_ROUTER_ADDR,
    deployer_account_1
  );

  //    - approve router to transfer Token A & Token B
  const result_approveTokenA = await token_A.approve(
    router.address,
    tokenA_mintAmount
  );
  await result_approveTokenA.wait(5);
  console.log(
    `Chef approved bringing ${deployConfigs.NAME_TOKEN_A} tokens to pool`
  );

  const result_approveTokenB = await token_B.approve(
    router.address,
    tokenB_mintAmount
  );
  await result_approveTokenB.wait(5);
  console.log(
    `Chef approved bringing ${deployConfigs.NAME_TOKEN_B} tokens to pool`
  );

  const baseToken = await ethers.getContractAt(
    "IERC20",
    config.CONTRACTS[deployConfigs.NETWORK].WETH_ADDR,
    deployer_account_1
  );

  const result_approveTokenBase = await baseToken.approve(
    router.address,
    tokenB_mintAmount
  );
  await result_approveTokenBase.wait(5);
  console.log(
    `Chef approved bringing ${deployConfigs.SYMBOL_BASE_TOKEN} tokens to pool`
  );

  //    - addLiquidity Pool 1: Token A & Token B
  const result_addLiquidity_Pool_1 = await router.addLiquidity(
    token_A.address,
    token_B.address,
    tokenAPerPool,
    tokenBPerPool,
    tokenAMin,
    tokenBMin,
    deployer_account_1.address,
    config.DEADLINE,
    {
      gasPrice: deployConfigs.GAS_PRICE,
      gasLimit: deployConfigs.GAS_LIMIT
    }
  );
  await result_addLiquidity_Pool_1.wait(5);
  console.log(
    `Chef added ${tokenAPerPool} ${deployConfigs.NAME_TOKEN_A} and ${tokenBPerPool} ${deployConfigs.NAME_TOKEN_B} of his own token to the ${deployConfigs.NAME_TOKEN_A} ${deployConfigs.NAME_TOKEN_B} pool`
  );

  //    - addLiquidity Pool 2: Token A & Token Base
  const result_addLiquidity_Pool_2 = await router.addLiquidityETH(
    token_A.address,
    tokenAPerPool,
    tokenAMin,
    baseTokenMin,
    deployer_account_1.address,
    config.DEADLINE,
    {
      gasPrice: deployConfigs.GAS_PRICE,
      gasLimit: deployConfigs.GAS_LIMIT
    }
  );
  await result_addLiquidity_Pool_2.wait(5);
  console.log(
    `Chef added ${tokenAPerPool} ${deployConfigs.NAME_TOKEN_A} and ${baseTokenMin} ${deployConfigs.SYMBOL_BASE_TOKEN} of his own token to the ${deployConfigs.NAME_TOKEN_A} ${deployConfigs.NAME_TOKEN_B} pool`
  );

  //    - addLiquidity Pool 3: Token B & Token Base
  // const result_addLiquidity_Pool_3 = await router.addLiquidityETH(
  //   token_B.address,
  //   tokenBPerPool,
  //   tokenBMin,
  //   baseTokenMin,
  //   deployer_account_1.address,
  //   config.DEADLINE,
  //   { gasPrice: 9000000000 }
  // );
  // await result_addLiquidity_Pool_3.wait(5);
  // console.log(
  //   `Chef added ${tokenBPerPool} ${deployConfigs.NAME_TOKEN_B} and ${baseTokenMin} ${deployConfigs.SYMBOL_BASE_TOKEN} of his own token to the ${deployConfigs.NAME_TOKEN_A} ${deployConfigs.NAME_TOKEN_B} pool`
  // );

  // 4. Simulate trading
  // TODO : Does a pair launch its own contract?

  // //    - First Trade : A -> B
  // const pairAB = await ethers.getContractAt(
  //   "IUniswapV2Pair",
  //   config.CONTRACTS[deployConfigs.NETWORK].UNI_FACTORY_ADDR,
  //   trader_account_1
  // );

  // const result_swap_pairAB = await pairAB.swap(
  //   firstTrade.amount0Out,
  //   firstTrade.amount1Out,
  //   firstTrade.to,
  //   firstTrade.data,
  //   { gasPrice: deployConfigs.gasPrice }
  // );
  // await result_Create_Pool_1.wait(5);
  // console.log("result_Create_Pool_1 result         : ", result_Create_Pool_1);

}

main()
  // eslint-disable-next-line no-process-exit
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });
