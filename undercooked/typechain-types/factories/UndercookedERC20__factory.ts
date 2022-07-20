/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UndercookedERC20,
  UndercookedERC20Interface,
} from "../UndercookedERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600580546001600160a01b03199081167311f6e896e27fcb3f3dce95f8274e8c744ef163e017909155600680548216734e188af9aea99a8335438a462e3f9036b684e8fb17905560078054821673a75784754615f15c1b2edac6c5d39a312713ec4317905560088054821673b2eb59a1eb6aee518f680bc307ab5ce4b073d1ce179055600980549091167312ba391f7608eca2ba006599f19506d2305b01ed179055348015620000b357600080fd5b5060405162000d4638038062000d46833981016040819052620000d69162000263565b8151620000eb9060039060208501906200010a565b508051620001019060049060208401906200010a565b5050506200031d565b8280546200011890620002ca565b90600052602060002090601f0160209004810192826200013c576000855562000187565b82601f106200015757805160ff191683800117855562000187565b8280016001018555821562000187579182015b82811115620001875782518255916020019190600101906200016a565b506200019592915062000199565b5090565b5b808211156200019557600081556001016200019a565b600082601f830112620001c1578081fd5b81516001600160401b0380821115620001de57620001de62000307565b604051601f8301601f19908116603f0116810190828211818310171562000209576200020962000307565b8160405283815260209250868385880101111562000225578485fd5b8491505b8382101562000248578582018301518183018401529082019062000229565b838211156200025957848385830101525b9695505050505050565b6000806040838503121562000276578182fd5b82516001600160401b03808211156200028d578384fd5b6200029b86838701620001b0565b93506020850151915080821115620002b1578283fd5b50620002c085828601620001b0565b9150509250929050565b600181811c90821680620002df57607f821691505b602082108114156200030157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610a19806200032d6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012357806370a082311461013657806395d89b411461015f578063a457c2d714610167578063a9059cbb1461017a578063dd62ed3e1461018d57600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101c6565b6040516100c391906108d1565b60405180910390f35b6100df6100da3660046108a8565b610258565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f36600461086d565b61026e565b604051601281526020016100c3565b6100df6101313660046108a8565b61031d565b6100f361014436600461081a565b6001600160a01b031660009081526020819052604090205490565b6100b6610359565b6100df6101753660046108a8565b610368565b6100df6101883660046108a8565b610401565b6100f361019b36600461083b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101d590610992565b80601f016020809104026020016040519081016040528092919081815260200182805461020190610992565b801561024e5780601f106102235761010080835404028352916020019161024e565b820191906000526020600020905b81548152906001019060200180831161023157829003601f168201915b5050505050905090565b600061026533848461040e565b50600192915050565b600061027b848484610532565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103055760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b610312853385840361040e565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610265918590610354908690610924565b61040e565b6060600480546101d590610992565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156103ea5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016102fc565b6103f7338585840361040e565b5060019392505050565b6000610265338484610532565b6001600160a01b0383166104705760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016102fc565b6001600160a01b0382166104d15760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016102fc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105965760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016102fc565b6001600160a01b0382166105f85760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016102fc565b6001600160a01b038316600090815260208190526040902054818110156106705760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016102fc565b6005546001600160a01b038581169116148061069957506006546001600160a01b038581169116145b806106b157506007546001600160a01b038581169116145b806106c957506008546001600160a01b038581169116145b806106e157506009546001600160a01b038581169116145b15610731576106f0828261097b565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610726908490610924565b909155506107ab9050565b61073b828261097b565b6001600160a01b038516600090815260208190526040812091909155606461076484600a61095c565b61076e919061093c565b905080600080866001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107a49190610924565b9091555050505b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107f091815260200190565b60405180910390a350505050565b80356001600160a01b038116811461081557600080fd5b919050565b60006020828403121561082b578081fd5b610834826107fe565b9392505050565b6000806040838503121561084d578081fd5b610856836107fe565b9150610864602084016107fe565b90509250929050565b600080600060608486031215610881578081fd5b61088a846107fe565b9250610898602085016107fe565b9150604084013590509250925092565b600080604083850312156108ba578182fd5b6108c3836107fe565b946020939093013593505050565b6000602080835283518082850152825b818110156108fd578581018301518582016040015282016108e1565b8181111561090e5783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610937576109376109cd565b500190565b60008261095757634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610976576109766109cd565b500290565b60008282101561098d5761098d6109cd565b500390565b600181811c908216806109a657607f821691505b602082108114156109c757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220202cdbc1e4b23ad2970df2116b73eaf87cde1b85fba018f6da7da659f7d9df1c64736f6c63430008040033";

type UndercookedERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UndercookedERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UndercookedERC20__factory extends ContractFactory {
  constructor(...args: UndercookedERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UndercookedERC20> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<UndercookedERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): UndercookedERC20 {
    return super.attach(address) as UndercookedERC20;
  }
  connect(signer: Signer): UndercookedERC20__factory {
    return super.connect(signer) as UndercookedERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UndercookedERC20Interface {
    return new utils.Interface(_abi) as UndercookedERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UndercookedERC20 {
    return new Contract(address, _abi, signerOrProvider) as UndercookedERC20;
  }
}
