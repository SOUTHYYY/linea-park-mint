import { Transaction } from 'web3';
import { getWeb3Instance } from './getWeb3Instsance.js';
import { Networks } from '../contants.js';

export const getGasLimit = async (transaction: Transaction) => {
  const w3 = getWeb3Instance(Networks.LINEA_MAINNET);
  return w3.eth.estimateGas(transaction).catch((err) => {
    throw new Error(`[GAS LIMIT ERROR] ${err.message}`);
  });
};
