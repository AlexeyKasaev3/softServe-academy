function getPartition(num) {
  let currentPartition = [num];
  const partitions = [];
  partitions[num] = [num];
  const testArray = [];

  while (currentPartition[0] > 1) {
    for (let i = currentPartition.length - 1; i >= 0; i -= 1) {
      if (i === 0) {
        const nextBaseNum = currentPartition[0] - 1;
        const baseNumRepeat = Math.floor(num / nextBaseNum);
        const remainder = num % nextBaseNum;
        const nextPartition = new Array(baseNumRepeat).fill(nextBaseNum);
        if (remainder) {
          nextPartition.push(remainder);
        }
        currentPartition = nextPartition;
        pushPartition(currentPartition);
        break;
      }

      if (i - 1 !== 0 && currentPartition[i - 1] - currentPartition[i] > 1) {
        currentPartition[i - 1] -= 1;
        currentPartition[i] += 1;
        pushPartition(currentPartition);
        break;
      }

      if (currentPartition[i] > 1) {
        currentPartition[i] -= 1;
        currentPartition.push(1);
        pushPartition(currentPartition);
        break;
      }
    }
  }

  function pushPartition(partition) {
    const clearPartition = [...partition];
    testArray.push(clearPartition);
    const partitionProductValue = clearPartition.reduce(
      (acc, cur) => acc * cur,
      1
    );
    if (!partitions[partitionProductValue]) {
      partitions[partitionProductValue] = [clearPartition];
    } else {
      partitions[partitionProductValue].push(clearPartition);
    }
  }
  console.log('===== output for', num, '=====');
  console.log('testArray', testArray);
  console.log('grouped partitions', partitions);
  console.log('return value', [
    partitions[partitions.length - 1],
    partitions.length - 1
  ]);
}

getPartition(8);
getPartition(10);
getPartition(12);
