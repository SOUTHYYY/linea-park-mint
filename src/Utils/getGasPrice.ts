import { Networks } from '../contants.js';
import { getWeb3Instance } from './getWeb3Instsance.js';

export const getGasPrice = async (network = Networks.ETHEREUM_MAINNET) => {
  const web3 = getWeb3Instance(network);
  const price = await web3.eth.getGasPrice();
  return Math.round(Number(web3.utils.fromWei(price, 'Gwei')));
};
