import { waitTimeout } from './waitTimeout.js';

export const doActionsWithCallNext = async <T>(
  idx: number,
  array: T[],
  callback: (...data: unknown[]) => unknown,
) => {
  const nextIdx = idx + 1;
  if (array.length === idx) {
    console.log('🏁 Finished!');
    return;
  }
  try {
    const actionData = array[idx];
    await callback(actionData, idx);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('💤 Sleep for 20 Seconds...');
    await waitTimeout(20);
    // eslint-disable-next-line no-unsafe-finally
    return doActionsWithCallNext(nextIdx, array, callback);
  }
};
