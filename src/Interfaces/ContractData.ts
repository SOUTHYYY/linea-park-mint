import { AbiItem } from 'web3';

type ParamsCallback = (parent: ContractData) => unknown[] | Promise<unknown[]>;

export interface ContractData {
  questName?: string;
  questUrl?: string;
  address: string;
  method: string;
  abi: AbiItem[];
  proxyAbi?: AbiItem[];
  proxyAddress?: string;
  params?: ParamsCallback | unknown[];
  value?: number;
}
