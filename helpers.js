// Get available moves for [x,y] position
export function totalMoves (pos) {
  const blocks = [1, -1, 2, -2];
  const totalMoves = blocks.length * pos.length;
  const result = [];
  for (let i = 0; i < totalMoves / 2; i++) {
    result.push([pos[0] + blocks[i], pos[1] + blocks[(totalMoves / 2) - 1 - i]]);
    result.push([pos[0] + blocks[i], pos[1] - blocks[(totalMoves / 2) - 1 - i]]);
  }

  return result.filter((e) => !(e[0] < 0 || e[1] < 0 || e[0] > 7 || e[1] > 7));
}

// Get the final Knights Travail
export function getTravail (arr, startPos) {
  const travail = [];
  let nextInTravail = startPos;
  while (nextInTravail) {
    for (const item of arr) {
      if (item.position.toString() === nextInTravail.toString()) {
        travail.push(item.position);
        nextInTravail = item.predecessor;
        break;
      }
    }
  }
  return travail;
}
