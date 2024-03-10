import { NetworksEnum } from '../Enum/networks.enum.js';
import { getWeb3Instance } from './getWeb3Instsance.js';

export const getGasPrice = async (network = NetworksEnum.ETHEREUM_MAINNET) => {
  const web3 = getWeb3Instance(network);
  const price = await web3.eth.getGasPrice();
  return Math.round(Number(web3.utils.fromWei(price, 'Gwei')));
};
