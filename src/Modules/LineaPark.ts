import { getWeb3Instance } from '../Utils/getWeb3Instsance.js';
import { Networks, PrivateKey } from '../contants.js';
import type { ContractData } from '../Interfaces/ContractData.js';

export const LineaParkMmoAndRpg: Readonly<ContractData[]> = [
  {
    questUrl: 'https://layer3.xyz/quests/linea-space-falcon',
    questName: 'Space Falcon Ecosystem and Aviatrix Game',
    address: '0x510581ceFD1a4c651Aa6727957F283c665647485',
    method: 'mint',
    abi: [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'currentAmountNFT',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: '_pricePerETH', type: 'uint256' },
        ],
        name: 'editPricePerETH',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'operator', type: 'address' },
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: '_nftAmount', type: 'uint256' },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'pricePerETH',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '_to', type: 'address' }],
        name: 'safeMint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'operator', type: 'address' },
          { internalType: 'bool', name: 'approved', type: 'bool' },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
        name: 'tokenByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'uint256', name: 'index', type: 'uint256' },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'wallet1',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      { stateMutability: 'payable', type: 'receive' },
    ],
    // [_nftAmount]
    params: [1],
  },
  {
    questName: 'GamerBoom: Genesis Testing with Linea',
    questUrl: 'https://layer3.xyz/quests/linea-gamerboom',
    address: '0x6cd20be8914a9be48f2a35e56354490b80522856',
    method: 'signGenesisProof',
    abi: [
      {
        inputs: [
          { internalType: 'uint256', name: '_mintPrice', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'address', name: 'owner', type: 'address' },
        ],
        name: 'ERC721IncorrectOwner',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'operator', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'ERC721InsufficientApproval',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'approver', type: 'address' },
        ],
        name: 'ERC721InvalidApprover',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'operator', type: 'address' },
        ],
        name: 'ERC721InvalidOperator',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'ERC721InvalidOwner',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'receiver', type: 'address' },
        ],
        name: 'ERC721InvalidReceiver',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
        name: 'ERC721InvalidSender',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ERC721NonexistentToken',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'OwnableInvalidOwner',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'OwnableUnauthorizedAccount',
        type: 'error',
      },
      { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'message',
            type: 'string',
          },
        ],
        name: 'GenesisBoomerProof',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newPrice',
            type: 'uint256',
          },
        ],
        name: 'MintPriceChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Minted',
        type: 'event',
      },
      { anonymous: false, inputs: [], name: 'MintingDisabled', type: 'event' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'mintCap',
            type: 'uint256',
          },
        ],
        name: 'MintingEnabled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [],
        name: 'MAX_SUPPLY',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'TOKEN_URI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'airdropClaimed',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
        ],
        name: 'claimAirdrop',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'disableMinting',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: '_mintCap', type: 'uint256' },
        ],
        name: 'enableMinting',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'hasClaimed',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'hasMinted',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'operator', type: 'address' },
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'mint',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'mintCap',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'mintPrice',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'mintedSum',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'mintingEnabled',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'mintAmount', type: 'uint256' },
        ],
        name: 'reserve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'root',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'operator', type: 'address' },
          { internalType: 'bool', name: 'approved', type: 'bool' },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'newMerkleRoot', type: 'bytes32' },
        ],
        name: 'setMerkleRoot',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: '_newPrice', type: 'uint256' },
        ],
        name: 'setMintPrice',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'signGenesisProof',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    params: [],
  },
  /**
   * TODO: Сложная функция придется делать руками
   */
  // {
  //   address: '0x34be5b8c30ee4fde069dc878989686abe9884470',
  //   method: 'mintFromShadowBatch',
  //   abi: [
  //     {
  //       inputs: [
  //         { internalType: 'string', name: 'name_', type: 'string' },
  //         { internalType: 'string', name: 'symbol_', type: 'string' },
  //         { internalType: 'string', name: '_baseurl', type: 'string' },
  //       ],
  //       stateMutability: 'nonpayable',
  //       type: 'constructor',
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: 'address',
  //           name: 'account',
  //           type: 'address',
  //         },
  //         {
  //           indexed: true,
  //           internalType: 'address',
  //           name: 'operator',
  //           type: 'address',
  //         },
  //         {
  //           indexed: false,
  //           internalType: 'bool',
  //           name: 'approved',
  //           type: 'bool',
  //         },
  //       ],
  //       name: 'ApprovalForAll',
  //       type: 'event',
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: false,
  //           internalType: 'uint256',
  //           name: 'tokenId',
  //           type: 'uint256',
  //         },
  //         {
  //           indexed: false,
  //           internalType: 'uint256',
  //           name: 'amount',
  //           type: 'uint256',
  //         },
  //         {
  //           indexed: false,
  //           internalType: 'uint8',
  //           name: 'channel',
  //           type: 'uint8',
  //         },
  //       ],
  //       name: 'MintSource',
  //       type: 'event',
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: 'address',
  //           name: 'previousOwner',
  //           type: 'address',
  //         },
  //         {
  //           indexed: true,
  //           internalType: 'address',
  //           name: 'newOwner',
  //           type: 'address',
  //         },
  //       ],
  //       name: 'OwnershipTransferred',
  //       type: 'event',
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: 'address',
  //           name: 'operator',
  //           type: 'address',
  //         },
  //         {
  //           indexed: true,
  //           internalType: 'address',
  //           name: 'from',
  //           type: 'address',
  //         },
  //         {
  //           indexed: true,
  //           internalType: 'address',
  //           name: 'to',
  //           type: 'address',
  //         },
  //         {
  //           indexed: false,
  //           internalType: 'uint256[]',
  //           name: 'ids',
  //           type: 'uint256[]',
  //         },
  //         {
  //           indexed: false,
  //           internalType: 'uint256[]',
  //           name: 'values',
  //           type: 'uint256[]',
  //         },
  //       ],
  //       name: 'TransferBatch',
  //       type: 'event',
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: 'address',
  //           name: 'operator',
  //           type: 'address',
  //         },
  //         {
  //           indexed: true,
  //           internalType: 'address',
  //           name: 'from',
  //           type: 'address',
  //         },
  //         {
  //           indexed: true,
  //           internalType: 'address',
  //           name: 'to',
  //           type: 'address',
  //         },
  //         {
  //           indexed: false,
  //           internalType: 'uint256',
  //           name: 'id',
  //           type: 'uint256',
  //         },
  //         {
  //           indexed: false,
  //           internalType: 'uint256',
  //           name: 'value',
  //           type: 'uint256',
  //         },
  //       ],
  //       name: 'TransferSingle',
  //       type: 'event',
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: false,
  //           internalType: 'string',
  //           name: 'value',
  //           type: 'string',
  //         },
  //         {
  //           indexed: true,
  //           internalType: 'uint256',
  //           name: 'id',
  //           type: 'uint256',
  //         },
  //       ],
  //       name: 'URI',
  //       type: 'event',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: 'account', type: 'address' },
  //         { internalType: 'uint256', name: 'id', type: 'uint256' },
  //       ],
  //       name: 'balanceOf',
  //       outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address[]', name: 'accounts', type: 'address[]' },
  //         { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
  //       ],
  //       name: 'balanceOfBatch',
  //       outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [],
  //       name: 'baseurl',
  //       outputs: [{ internalType: 'string', name: '', type: 'string' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [],
  //       name: 'beneficiary',
  //       outputs: [{ internalType: 'address', name: '', type: 'address' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: 'account', type: 'address' },
  //         { internalType: 'uint256', name: '_tokenID', type: 'uint256' },
  //         { internalType: 'uint256', name: 'amount', type: 'uint256' },
  //       ],
  //       name: 'burn',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: 'account', type: 'address' },
  //         { internalType: 'uint256', name: 'id', type: 'uint256' },
  //         { internalType: 'uint256', name: 'amount', type: 'uint256' },
  //         { internalType: 'uint256', name: '_stopMintAfter', type: 'uint256' },
  //         { internalType: 'uint256', name: '_maxTotalSupply', type: 'uint256' },
  //       ],
  //       name: 'createNew',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: 'account', type: 'address' },
  //         { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
  //         { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
  //         {
  //           internalType: 'uint256[]',
  //           name: '_stopMintAfter',
  //           type: 'uint256[]',
  //         },
  //         {
  //           internalType: 'uint256[]',
  //           name: '_maxTotalSupply',
  //           type: 'uint256[]',
  //         },
  //       ],
  //       name: 'createNewBatch',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'uint256', name: 'id', type: 'uint256' },
  //         { internalType: 'uint256', name: '_stopMintAfter', type: 'uint256' },
  //         { internalType: 'uint256', name: '_maxTotalSupply', type: 'uint256' },
  //       ],
  //       name: 'editTokenReq',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
  //       name: 'exists',
  //       outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [],
  //       name: 'externalShadow',
  //       outputs: [{ internalType: 'address', name: '', type: 'address' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [],
  //       name: 'externalWhiteList',
  //       outputs: [{ internalType: 'address', name: '', type: 'address' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
  //         { internalType: 'uint256', name: '_amount', type: 'uint256' },
  //         { internalType: 'uint256', name: '_nonce', type: 'uint256' },
  //         { internalType: 'address', name: '_sender', type: 'address' },
  //       ],
  //       name: 'getMsgForSign',
  //       outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
  //       stateMutability: 'pure',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'uint256[]', name: '_tokenId', type: 'uint256[]' },
  //         { internalType: 'uint256[]', name: '_amount', type: 'uint256[]' },
  //         { internalType: 'uint256', name: '_nonce', type: 'uint256' },
  //         { internalType: 'address', name: '_sender', type: 'address' },
  //       ],
  //       name: 'getMsgForSignBatch',
  //       outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
  //       stateMutability: 'pure',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
  //       name: 'getTokenDetails',
  //       outputs: [
  //         {
  //           components: [
  //             {
  //               internalType: 'uint256',
  //               name: 'stopMintAfter',
  //               type: 'uint256',
  //             },
  //             {
  //               internalType: 'uint256',
  //               name: 'maxTotalSupply',
  //               type: 'uint256',
  //             },
  //           ],
  //           internalType: 'struct SidusItems.TokenReq',
  //           name: '',
  //           type: 'tuple',
  //         },
  //       ],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: 'account', type: 'address' },
  //         { internalType: 'address', name: 'operator', type: 'address' },
  //       ],
  //       name: 'isApprovedForAll',
  //       outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'uint256', name: '_tokenID', type: 'uint256' },
  //         {
  //           internalType: 'uint256',
  //           name: '_nftAmountForMint',
  //           type: 'uint256',
  //         },
  //         { internalType: 'uint256', name: '_nonce', type: 'uint256' },
  //         { internalType: 'bytes32', name: '_msgForSign', type: 'bytes32' },
  //         { internalType: 'bytes', name: '_signature', type: 'bytes' },
  //       ],
  //       name: 'mintFromShadow',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'uint256[]', name: '_tokenID', type: 'uint256[]' },
  //         {
  //           internalType: 'uint256[]',
  //           name: '_nftAmountForMint',
  //           type: 'uint256[]',
  //         },
  //         { internalType: 'uint256', name: '_nonce', type: 'uint256' },
  //         { internalType: 'bytes32', name: '_msgForSign', type: 'bytes32' },
  //         { internalType: 'bytes', name: '_signature', type: 'bytes' },
  //       ],
  //       name: 'mintFromShadowBatch',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: '_withToken', type: 'address' },
  //         { internalType: 'uint256', name: '_tokenID', type: 'uint256' },
  //         {
  //           internalType: 'uint256',
  //           name: '_nftAmountForMint',
  //           type: 'uint256',
  //         },
  //       ],
  //       name: 'mintWithERC20',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [],
  //       name: 'name',
  //       outputs: [{ internalType: 'string', name: '', type: 'string' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [{ internalType: 'address', name: '', type: 'address' }],
  //       name: 'nonce',
  //       outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [],
  //       name: 'owner',
  //       outputs: [{ internalType: 'address', name: '', type: 'address' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [],
  //       name: 'renounceOwnership',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: 'from', type: 'address' },
  //         { internalType: 'address', name: 'to', type: 'address' },
  //         { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
  //         { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
  //         { internalType: 'bytes', name: 'data', type: 'bytes' },
  //       ],
  //       name: 'safeBatchTransferFrom',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: 'from', type: 'address' },
  //         { internalType: 'address', name: 'to', type: 'address' },
  //         { internalType: 'uint256', name: 'id', type: 'uint256' },
  //         { internalType: 'uint256', name: 'amount', type: 'uint256' },
  //         { internalType: 'bytes', name: 'data', type: 'bytes' },
  //       ],
  //       name: 'safeTransferFrom',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: 'operator', type: 'address' },
  //         { internalType: 'bool', name: 'approved', type: 'bool' },
  //       ],
  //       name: 'setApprovalForAll',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: '_beneficiary', type: 'address' },
  //       ],
  //       name: 'setBeneficiary',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'uint256', name: 'id', type: 'uint256' },
  //         { internalType: 'uint256', name: '_maxSupply', type: 'uint256' },
  //       ],
  //       name: 'setMaxTotalSupply',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: '_token', type: 'address' },
  //         { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
  //         { internalType: 'uint256', name: '_pricePerMint', type: 'uint256' },
  //       ],
  //       name: 'setPriceInToken',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'uint256', name: 'id', type: 'uint256' },
  //         { internalType: 'uint256', name: '_stopMinter', type: 'uint256' },
  //       ],
  //       name: 'setStopMinterAfter',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: '_signer', type: 'address' },
  //         { internalType: 'bool', name: '_isValid', type: 'bool' },
  //       ],
  //       name: 'setTrustedSigner',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [{ internalType: 'address', name: '_wl', type: 'address' }],
  //       name: 'setWhiteList',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
  //       ],
  //       name: 'supportsInterface',
  //       outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [],
  //       name: 'symbol',
  //       outputs: [{ internalType: 'string', name: '', type: 'string' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  //       name: 'tokenReq',
  //       outputs: [
  //         { internalType: 'uint256', name: 'stopMintAfter', type: 'uint256' },
  //         { internalType: 'uint256', name: 'maxTotalSupply', type: 'uint256' },
  //       ],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: '', type: 'address' },
  //         { internalType: 'uint256', name: '', type: 'uint256' },
  //       ],
  //       name: 'tokensForMint',
  //       outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
  //       name: 'totalSupply',
  //       outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'address', name: 'newOwner', type: 'address' },
  //       ],
  //       name: 'transferOwnership',
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [{ internalType: 'address', name: '', type: 'address' }],
  //       name: 'trustedSigner',
  //       outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //     {
  //       inputs: [
  //         { internalType: 'uint256', name: '_tokenID', type: 'uint256' },
  //       ],
  //       name: 'uri',
  //       outputs: [{ internalType: 'string', name: '_uri', type: 'string' }],
  //       stateMutability: 'view',
  //       type: 'function',
  //     },
  //   ],
  //   // _tokenID, _nftAmountForMint, _nonce, _msgForSign, _signature
  //   params: [9, 1, 0],
  // },
  // {
  //   address: '0x281a95769916555d1c97036e0331b232b16edabc',
  //   method: 'createAccountSign',
  //   abi: [],
  //   params: [],
  // },
];

export const LineaParkActionAndStrategy: Readonly<ContractData[]> = [
  {
    questUrl: 'https://layer3.xyz/quests/linea-abyss-world',
    questName: 'Abyss World - Linea Park Quest',
    proxyAddress: '0x66ccc220543b6832f93c2082edd7be19c21df6c0',
    address: '0xd82f30c68369f255b32be4864deef620a3c709fb',
    abi: [
      {
        inputs: [
          { internalType: 'string', name: 'name_', type: 'string' },
          { internalType: 'string', name: 'symbol_', type: 'string' },
          { internalType: 'uint256', name: 'maxSupply_', type: 'uint256' },
          { internalType: 'string', name: 'baseUri_', type: 'string' },
          { internalType: 'string', name: 'collectionURI_', type: 'string' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      { inputs: [], name: 'InvalidShortString', type: 'error' },
      { inputs: [], name: 'Presale_Inactive', type: 'error' },
      { inputs: [], name: 'Presale_MerkleNotApproved', type: 'error' },
      { inputs: [], name: 'Presale_TooManyForAddress', type: 'error' },
      { inputs: [], name: 'Purchase_TooManyForAddress', type: 'error' },
      {
        inputs: [
          { internalType: 'uint256', name: 'correctPrice', type: 'uint256' },
        ],
        name: 'Purchase_WrongPrice',
        type: 'error',
      },
      { inputs: [], name: 'Sale_Inactive', type: 'error' },
      {
        inputs: [{ internalType: 'string', name: 'str', type: 'string' }],
        name: 'StringTooLong',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'EIP712DomainChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'quantity',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'pricePerToken',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'salePhase',
            type: 'uint256',
          },
        ],
        name: 'Sale',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [],
        name: 'CREATEX_MINT_FEE',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'FREE_MINT_FEE_TIMESTAMP',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        ],
        name: 'createXFeeForAmount',
        outputs: [
          {
            internalType: 'address payable',
            name: 'recipient',
            type: 'address',
          },
          { internalType: 'uint256', name: 'fee', type: 'uint256' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
          { internalType: 'bytes1', name: 'fields', type: 'bytes1' },
          { internalType: 'string', name: 'name', type: 'string' },
          { internalType: 'string', name: 'version', type: 'string' },
          { internalType: 'uint256', name: 'chainId', type: 'uint256' },
          {
            internalType: 'address',
            name: 'verifyingContract',
            type: 'address',
          },
          { internalType: 'bytes32', name: 'salt', type: 'bytes32' },
          { internalType: 'uint256[]', name: 'extensions', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'exists',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getBaseURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getCollectionURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getCrateXMintFee',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getMaxSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'string', name: 'name_', type: 'string' },
          { internalType: 'string', name: 'symbol_', type: 'string' },
          { internalType: 'uint256', name: 'maxSupply_', type: 'uint256' },
          { internalType: 'string', name: 'baseUri_', type: 'string' },
          { internalType: 'string', name: 'collectionURI_', type: 'string' },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'royaltyAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'create_mint_fee', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'free_mint_fee_timestamp',
            type: 'uint256',
          },
        ],
        name: 'initCreator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'operator', type: 'address' },
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'percentBase',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'presaleMintsByAddress',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'publicSaleMintsByAddress',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        ],
        name: 'purchase',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'quantity', type: 'uint256' },
          { internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
        ],
        name: 'purchasePresale',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'royaltyInfo',
        outputs: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'royaltyAmount', type: 'uint256' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'saleDetails',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'publicSalePrice',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxSalePurchasePerAddress',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'publicSaleStart',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'publicSaleEnd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'presaleStart',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'preSalePrice',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'presaleMaxMintsPerAddress',
                type: 'uint256',
              },
              { internalType: 'uint256', name: 'presaleEnd', type: 'uint256' },
              {
                internalType: 'bytes32',
                name: 'presaleMerkleRoot',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'fundsRecipient',
                type: 'address',
              },
            ],
            internalType: 'struct CreateXSaleImpl.SalesConfiguration',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'salesConfig',
        outputs: [
          { internalType: 'uint256', name: 'publicSalePrice', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'maxSalePurchasePerAddress',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'publicSaleStart', type: 'uint256' },
          { internalType: 'uint256', name: 'publicSaleEnd', type: 'uint256' },
          { internalType: 'uint256', name: 'presaleStart', type: 'uint256' },
          { internalType: 'uint256', name: 'preSalePrice', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'presaleMaxMintsPerAddress',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'presaleEnd', type: 'uint256' },
          {
            internalType: 'bytes32',
            name: 'presaleMerkleRoot',
            type: 'bytes32',
          },
          { internalType: 'address', name: 'fundsRecipient', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'operator', type: 'address' },
          { internalType: 'bool', name: 'approved', type: 'bool' },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'string', name: 'newBaseUri', type: 'string' },
        ],
        name: 'setBaseURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'string', name: 'newCollectionURI', type: 'string' },
        ],
        name: 'setCollectionURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'publicSalePrice', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'maxSalePurchasePerAddress',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'publicSaleStart', type: 'uint256' },
          { internalType: 'uint256', name: 'publicSaleEnd', type: 'uint256' },
          { internalType: 'uint256', name: 'presaleStart', type: 'uint256' },
          { internalType: 'uint256', name: 'presaleEnd', type: 'uint256' },
          { internalType: 'uint256', name: 'preSalePrice', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'presaleMaxMintsPerAddress',
            type: 'uint256',
          },
          { internalType: 'address', name: 'fundsRecipient', type: 'address' },
          {
            internalType: 'bytes32',
            name: 'presaleMerkleRoot',
            type: 'bytes32',
          },
        ],
        name: 'setSaleConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'royaltyAmount', type: 'uint256' },
        ],
        name: 'setTokenRoyalty',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
        name: 'tokenByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'uint256', name: 'index', type: 'uint256' },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    method: 'purchase',
    value: 0.0001,
    proxyAbi: [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      { stateMutability: 'payable', type: 'fallback' },
      {
        inputs: [],
        name: 'implementation',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      { stateMutability: 'payable', type: 'receive' },
    ],
    // quantity
    params: [1],
  },
  {
    questUrl: 'https://layer3.xyz/quests/linea-pictograph',
    questName: 'Snap, Play and Earn with Pictographs Main Quest',
    address: '0xb18b7847072117ae863f71f9473d555d601eb537',
    method: 'mintNFT',
    abi: [
      {
        inputs: [
          { internalType: 'address', name: 'initialOwner', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'staker',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Staked',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'staker',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Unstaked',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'getOwnedTokens',
        outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'uint256', name: 'start', type: 'uint256' },
          { internalType: 'uint256', name: 'end', type: 'uint256' },
        ],
        name: 'getOwnedTokensInterval',
        outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'operator', type: 'address' },
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'mintNFT',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'price',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'operator', type: 'address' },
          { internalType: 'bool', name: 'approved', type: 'bool' },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'string', name: 'baseURI_', type: 'string' }],
        name: 'setBaseURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'stake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'stakedTokens',
        outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'startSale',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
        name: 'tokenByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'uint256', name: 'index', type: 'uint256' },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'unstake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    params: [],
  },
  {
    questUrl: 'https://layer3.xyz/quests/linea-pictograph',
    questName: 'Snap, Play and Earn with Pictographs Additional Quest',
    address: '0xb18b7847072117ae863f71f9473d555d601eb537',
    method: 'stake',
    abi: [
      {
        inputs: [
          { internalType: 'address', name: 'initialOwner', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'staker',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Staked',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'staker',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Unstaked',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'getOwnedTokens',
        outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'uint256', name: 'start', type: 'uint256' },
          { internalType: 'uint256', name: 'end', type: 'uint256' },
        ],
        name: 'getOwnedTokensInterval',
        outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'operator', type: 'address' },
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'mintNFT',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'price',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'operator', type: 'address' },
          { internalType: 'bool', name: 'approved', type: 'bool' },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'string', name: 'baseURI_', type: 'string' }],
        name: 'setBaseURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'stake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'stakedTokens',
        outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'startSale',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
        name: 'tokenByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'uint256', name: 'index', type: 'uint256' },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'unstake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    /**
     * Get Nft Id that we minted in prev step
     */
    params: async (contractData) => {
      const w3 = getWeb3Instance(Networks.LINEA_MAINNET);
      const account = w3.eth.accounts.wallet.add(PrivateKey).get(0);
      const contract = new w3.eth.Contract(
        contractData.abi,
        contractData.address,
      );

      const totalSupply = Number(await contract.methods.totalSupply().call());
      const [id]: number[] = await contract.methods
        .getOwnedTokensInterval(
          account.address,
          totalSupply - 5_000,
          totalSupply,
        )
        .call();

      if (Number(id) === 0) throw new Error('Failed to get NFT ID');
      return [Number(id)];
    },
  },
  {
    questName: 'Satoshi Universe',
    questUrl: 'https://layer3.xyz/quests/linea-satoshi-universe',
    address: '0xecbee1a087aa83db1fcc6c2c5effc30bcb191589',
    method: 'mint',
    value: 0.00015,
    abi: [
      {
        inputs: [
          { internalType: 'address', name: 'factory_', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'collection',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'minter',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'quantity',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Minted',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'address', name: '_collection', type: 'address' },
          { internalType: 'uint256', name: '_oseaAmount', type: 'uint256' },
          {
            internalType: 'uint256',
            name: '_oseaAmountPerToken',
            type: 'uint256',
          },
        ],
        name: 'addOseaToCollection',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'collectionsOsea',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'collectionsOseaPerToken',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'dynamicFee',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'fixedFee',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'isOseaEnabled',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'minOseaPerCollection',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'address', name: 'to', type: 'address' },
              { internalType: 'address', name: 'collection', type: 'address' },
              { internalType: 'uint24', name: 'quantity', type: 'uint24' },
              {
                internalType: 'bytes32[]',
                name: 'merkleProof',
                type: 'bytes32[]',
              },
              { internalType: 'uint8', name: 'phaseId', type: 'uint8' },
              { internalType: 'bytes', name: 'payloadForCall', type: 'bytes' },
            ],
            internalType: 'struct MintParams',
            name: '_params',
            type: 'tuple',
          },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'osea',
        outputs: [
          { internalType: 'contract IERC20', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'fee_', type: 'uint256' }],
        name: 'setFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'fee_', type: 'uint256' }],
        name: 'setFixedFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: '_osea', type: 'address' },
          {
            internalType: 'uint256',
            name: '_minOseaPerCollection',
            type: 'uint256',
          },
          { internalType: 'bool', name: '_isEnabled', type: 'bool' },
        ],
        name: 'setOSEA',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'bool', name: 'isPaused_', type: 'bool' }],
        name: 'setPause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: '_manager', type: 'address' },
        ],
        name: 'setRevenueManager',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      { stateMutability: 'payable', type: 'receive' },
    ],
    params: () => {
      const w3 = getWeb3Instance(Networks.LINEA_MAINNET);
      const account = w3.eth.accounts.wallet.add(PrivateKey).get(0);

      return [
        {
          to: account.address,
          collection: '0x0dE240B2A3634fCD72919eB591A7207bDdef03cd',
          quantity: 1,
          merkleProof: [],
          phaseId: 1,
          payloadForCall: '0x',
        },
      ];
    },
  },
];

export const LineaParkSocialWorld: Readonly<ContractData[]> = [
  {
    questName: 'Send Email form Linea',
    proxyAddress: '0xd1a3abf42f9e66be86cfdea8c5c2c74f041c5e14',
    proxyAbi: [
      {
        inputs: [
          { internalType: 'address', name: '_logic', type: 'address' },
          { internalType: 'bytes', name: '_data', type: 'bytes' },
        ],
        stateMutability: 'payable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'previousAdmin',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newAdmin',
            type: 'address',
          },
        ],
        name: 'AdminChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'beacon',
            type: 'address',
          },
        ],
        name: 'BeaconUpgraded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      { stateMutability: 'payable', type: 'fallback' },
      { stateMutability: 'payable', type: 'receive' },
    ],
    address: '0x564477025731ee7197eecf2c4a0d0106cc3e4572',
    abi: [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'previousAdmin',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newAdmin',
            type: 'address',
          },
        ],
        name: 'AdminChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'beacon',
            type: 'address',
          },
        ],
        name: 'BeaconUpgraded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'version',
            type: 'uint8',
          },
        ],
        name: 'Initialized',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          { indexed: true, internalType: 'string', name: 'to', type: 'string' },
          {
            indexed: true,
            internalType: 'string',
            name: 'path',
            type: 'string',
          },
        ],
        name: 'Message',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'Paused',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'Unpaused',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'account', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'burnFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
        ],
        name: 'decreaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'paused',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'string', name: 'to', type: 'string' },
          { internalType: 'string', name: 'path', type: 'string' },
        ],
        name: 'send_mail',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'unpause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    method: 'send_mail',
    params: () => {
      let toString: string = '';
      for (let i = 0; i < 64; i++) {
        toString += Math.floor(Math.random() * 16).toString(16);
      }

      let pathString: string = '';
      for (let i = 0; i < 64; i++) {
        pathString += Math.floor(Math.random() * 16).toString(16);
      }

      return [toString, pathString];
    },
  },
  {
    questUrl: 'https://layer3.xyz/quests/linea-gamic-app',
    questName: 'Into the Gamic Hub',
    address: '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f',
    value: 0.000001,
    method: 'deposit',
    abi: [
      {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { name: 'guy', type: 'address' },
          { name: 'wad', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { name: 'src', type: 'address' },
          { name: 'dst', type: 'address' },
          { name: 'wad', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [{ name: 'wad', type: 'uint256' }],
        name: 'withdraw',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', type: 'uint8' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [{ name: '', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { name: 'dst', type: 'address' },
          { name: 'wad', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'deposit',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          { name: '', type: 'address' },
          { name: '', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      { payable: true, stateMutability: 'payable', type: 'fallback' },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'src', type: 'address' },
          { indexed: true, name: 'guy', type: 'address' },
          { indexed: false, name: 'wad', type: 'uint256' },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'src', type: 'address' },
          { indexed: true, name: 'dst', type: 'address' },
          { indexed: false, name: 'wad', type: 'uint256' },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'dst', type: 'address' },
          { indexed: false, name: 'wad', type: 'uint256' },
        ],
        name: 'Deposit',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'src', type: 'address' },
          { indexed: false, name: 'wad', type: 'uint256' },
        ],
        name: 'Withdrawal',
        type: 'event',
      },
    ],
    params: [],
  },
  {
    questUrl: 'https://layer3.xyz/quests/linea-asmatch',
    questName: 'AsMatch',
    address: '0xc043bce9af87004398181a8de46b26e63b29bf99',
    method: 'purchase',
    value: 0.0001,
    abi: [
      {
        inputs: [
          { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        ],
        name: 'purchase',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    params: [1],
  },
  {
    questUrl: 'https://layer3.xyz/quests/linea-bitavatar',
    questName: 'BitAvatar Main Quest',
    address: '0x37d4bfc8c583d297a0740d734b271eac9a88ade4',
    method: 'mint',
    abi: [
      {
        inputs: [{ internalType: 'string', name: 'tokenURI', type: 'string' }],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    params: () => {
      let avatarId: string = '';
      for (let i = 0; i < 24; i++) {
        avatarId += Math.floor(Math.random() * 16).toString(16);
      }
      return [`https://api.bitavatar.io/v1/avatar/${avatarId}`];
    },
  },
  {
    questUrl: 'https://layer3.xyz/quests/linea-bitavatar',
    questName: 'BitAvatar Additional Quest',
    address: '0x37d4bfc8c583d297a0740d734b271eac9a88ade4',
    method: 'checkIn',
    abi: [
      {
        inputs: [],
        name: 'checkIn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    params: [],
  },
  {
    questName: 'ReadON',
    questUrl: 'https://layer3.xyz/quests/linea-readon',
    address: '0x629658970d075d0d50f88110238787b3d10c21fe',
    proxyAddress: '0x8286d601a0ed6cf75e067e0614f73a5b9f024151',
    method: 'curate',
    proxyAbi: [
      {
        inputs: [
          { internalType: 'address', name: '_logic', type: 'address' },
          { internalType: 'bytes', name: '_data', type: 'bytes' },
        ],
        stateMutability: 'payable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'previousAdmin',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newAdmin',
            type: 'address',
          },
        ],
        name: 'AdminChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'beacon',
            type: 'address',
          },
        ],
        name: 'BeaconUpgraded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      { stateMutability: 'payable', type: 'fallback' },
      { stateMutability: 'payable', type: 'receive' },
    ],
    abi: [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'previousAdmin',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newAdmin',
            type: 'address',
          },
        ],
        name: 'AdminChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'beacon',
            type: 'address',
          },
        ],
        name: 'BeaconUpgraded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'curator',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint64',
            name: 'contentUrl',
            type: 'uint64',
          },
        ],
        name: 'Curate',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'version',
            type: 'uint8',
          },
        ],
        name: 'Initialized',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'uint64', name: 'contentUrl', type: 'uint64' },
        ],
        name: 'curate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    params: () => {
      let contentUrl = '171002';

      for (let i = 0; i < 13; i++) {
        contentUrl += Math.floor(Math.random() * 10).toString();
      }
      return [contentUrl];
    },
  },
  {
    questName: 'Linea Park - SendingMe',
    questUrl: 'https://layer3.xyz/quests/linea-sending-me',
    address: '0xc0DEb0445e1c307b168478f38eac7646d198F984',
    value: 0.000001,
    method: 'transfer',
    proxyAbi: [
      {
        inputs: [
          { internalType: 'address', name: '_logic', type: 'address' },
          { internalType: 'bytes', name: '_data', type: 'bytes' },
        ],
        stateMutability: 'payable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'previousAdmin',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newAdmin',
            type: 'address',
          },
        ],
        name: 'AdminChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'beacon',
            type: 'address',
          },
        ],
        name: 'BeaconUpgraded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      { stateMutability: 'payable', type: 'fallback' },
      { stateMutability: 'payable', type: 'receive' },
    ],
    abi: [],
    params: [],
  },
];
