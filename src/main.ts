/* eslint-disable @typescript-eslint/no-unused-vars */
import { Contract, Transaction, Web3, Web3BaseWalletAccount } from 'web3';
import {
  ATTEMPS_COUNT,
  InfuraApiKey,
  Networks,
  PrivateKey,
} from './contants.js';
import {
  LineaParkActionAndStrategy,
  LineaParkMmoAndRpg,
  LineaParkSocialWorld,
} from './Modules/LineaPark.js';
import { getGasLimit } from './Utils/getGasLimit.js';
import { getGasPrice } from './Utils/getGasPrice.js';
import type { ContractData } from './Interfaces/ContractData.js';
import { doActionsWithCallNext } from './Utils/doActionWithCallNext.js';

const makeTransaction = async (
  contractData: ContractData,
  account: Web3BaseWalletAccount,
  w3: Web3,
) => {
  const {
    method,
    abi,
    address: contractAddress,
    params,
    value,
    proxyAbi,
    proxyAddress,
    questName,
    questUrl,
    data: contactData,
  } = contractData;

  const txCount = await w3.eth.getTransactionCount(account.address);
  const txValue = value ? w3.utils.toWei(value, 'ether') : undefined;
  const gasPrice = (await getGasPrice(Networks.LINEA_MAINNET))
    .toFixed(9)
    .toString();

  const callParams =
    typeof params === 'function' ? await params(contractData) : [...params];

  let tx: Transaction = {
    nonce: w3.utils.toHex(txCount),
    from: account.address,
    value: txValue,
  };

  if (proxyAbi && proxyAddress) {
    const contract = new Contract(abi, contractAddress);
    const data = contactData
      ? contactData
      : contract.methods[method](...callParams).encodeABI();

    tx = {
      ...tx,
      to: proxyAddress,
      data: data,
    };
  } else if (method === 'transfer') {
    // Just sending ETH to address
    tx = {
      ...tx,
      to: contractAddress,
    };
  } else {
    const contract = new Contract(abi, contractAddress);
    const data = contactData
      ? contactData
      : contract.methods[method](...callParams).encodeABI();
    tx = {
      ...tx,
      to: contractAddress,
      data,
    };
  }

  const gasLimit = await getGasLimit(tx);
  tx.maxFeePerGas = w3.utils.toWei(gasPrice, 'Gwei');
  tx.maxPriorityFeePerGas = w3.utils.toWei(gasPrice, 'Gwei');
  tx.gas = gasLimit;

  if (questName && questUrl) {
    console.log(`🗂️  ${questName} [${questUrl}]`);
  }

  const { transactionHash } = await w3.eth.sendTransaction(tx);

  console.log(`✅ Tx hash: https://lineascan.build/tx/${transactionHash}`);
};

const main = async (): Promise<void> => {
  const url = `wss://${Networks.LINEA_MAINNET}.infura.io/ws/v3/${InfuraApiKey}`;
  const provider = new Web3.providers.WebsocketProvider(url);
  console.log(`Is support subscriptions? ${provider.supportsSubscriptions()}`);
  const w3 = new Web3();
  w3.setProvider(provider);

  const tasks = [
    ...LineaParkMmoAndRpg,
    ...LineaParkActionAndStrategy,
    ...LineaParkSocialWorld,
  ];

  const account = w3.eth.accounts.wallet.add(PrivateKey).get(0);
  await doActionsWithCallNext<ContractData>(
    0,
    tasks,
    async (data: ContractData) => await makeTransaction(data, account, w3),
    ATTEMPS_COUNT,
  );

  return;
};
main();
