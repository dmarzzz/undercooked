import { ethers } from "hardhat";
import { Contract, ContractFactory, Wallet } from "ethers";

export function getDeployer(
  RPC_ENDPOINT: string,
  DEPLOYER_PRIVATE_KEY: string
): Wallet {
  // todo find type
  const provider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
  const deployer: Wallet = new ethers.Wallet(
    `0x${DEPLOYER_PRIVATE_KEY}`,
    provider
  );
  return deployer;
}

export async function deploy(
  wallet: Wallet,
  name: string,
  args: any[] = []
): Promise<Contract> {
  const Implementation: ContractFactory = await ethers.getContractFactory(
    name,
    wallet
  );
  const contract = await Implementation.deploy(...args);
  return contract.deployed();
}
