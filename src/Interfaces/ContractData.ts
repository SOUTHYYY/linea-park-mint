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
  // Specify data for those contracts where we cannot decode ABI and all contracts send the same data.
  data?: string;
  value?: number;
}
