import { getGasPrice } from './getGasPrice.js';

export const waitForGas = async (gasPrice: number) => {
  return new Promise((resolve) => {
    setInterval(async () => {
      const currentGasPrice = await getGasPrice();
      console.log(`Wait for good gas price... Current: ${currentGasPrice}`);
      if (gasPrice <= gasPrice) {
        return resolve(true);
      }
    }, 10_000);
  });
};
