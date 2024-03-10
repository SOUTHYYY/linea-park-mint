import { Web3 } from 'web3';
import { InfuraApiKey, Networks } from '../contants.js';

export const getWeb3Instance = (newtork = Networks.ETHEREUM_MAINNET) => {
  const url = `https://${newtork}.infura.io/v3/${InfuraApiKey}`;
  const provider = new Web3.providers.HttpProvider(url);
  const w3 = new Web3();
  w3.setProvider(provider);
  return w3;
};
