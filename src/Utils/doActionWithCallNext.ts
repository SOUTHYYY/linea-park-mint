import { ATTEMPS_COUNT, WAIT_TIMEOUT_RANGE } from '../contants.js';
import { getRandomInt } from './getRandomNumberInRange.js';
import { waitTimeout } from './waitTimeout.js';

export const doActionsWithCallNext = async <T>(
  idx: number,
  array: T[],
  callback: (...data: unknown[]) => unknown,
  attempsCount: number,
) => {
  let isTxCallError = false;
  const nextAttempsCount = attempsCount - 1;
  const nextIdx = idx + 1;
  if (array.length === idx) {
    console.log('🏁 Finished!');
    return;
  }
  try {
    const actionData = array[idx];
    await callback(actionData, idx);
  } catch (err) {
    isTxCallError = true;
    console.log(`❌ Error while sending TX: ${err.message}`);
  } finally {
    const timeout = getRandomInt(WAIT_TIMEOUT_RANGE[0], WAIT_TIMEOUT_RANGE[1]);
    console.log(`💤 Sleep for ${timeout} Seconds...`);
    await waitTimeout(timeout);

    if (isTxCallError) {
      if (nextAttempsCount > 0) {
        console.log(
          `Attempting to call the transaction again. Attempts Left: ${nextAttempsCount}`,
        );
        // eslint-disable-next-line no-unsafe-finally
        return doActionsWithCallNext(idx, array, callback, nextAttempsCount);
      }

      console.log(
        `❌ Failed to execute TX. Attempts Left: 0. Moving on to the next transaction `,
      );
    }
    // eslint-disable-next-line no-unsafe-finally
    return doActionsWithCallNext(nextIdx, array, callback, ATTEMPS_COUNT);
  }
};
