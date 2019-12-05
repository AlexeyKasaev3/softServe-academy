function meeting(rooms, need) {
  if (!need) return 'Game On';

  const numberOfRooms = rooms.length;
  const borrowedChairs = [];
  for (let i = 0; i < numberOfRooms; i += 1) {
      const freeChairs = rooms[i][1] - rooms[i][0].length;
      if (freeChairs > 0) {
          if (need > freeChairs) {
              need -= freeChairs;
              borrowedChairs.push(freeChairs);
          } else if (need === freeChairs) {
              borrowedChairs.push(freeChairs);
              return borrowedChairs;
          } else if (need < freeChairs) {
              borrowedChairs.push(need);
              return borrowedChairs;
          }
      } else {
          borrowedChairs.push(0);
      }
  }
  return 'Not enough!';
}

console.log(
  meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) /* [0, 1, 3] */
);
console.log(
  meeting(
      [
          ['XXX', 1],
          ['XXXXXX', 6],
          ['X', 2],
          ['XXXXXX', 8],
          ['X', 3],
          ['XXX', 1]
      ],
      5
  ) /* [0, 0, 1, 2, 2] */
);
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) === 'Game On');