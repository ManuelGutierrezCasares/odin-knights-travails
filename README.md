# odin-knights-travails

## Project: Knights Travails
Javascript Knights Travails implementation using Breadth-first search Algorithm.

### Usage:
Function "knightMoves(startPosition, endPosition)" gets 2 arrays of 2 integers each as arguments.
Each array has X and Y position corresponding to a chess board (legal integer values: 0-7).
KnightMoves will get the shortest path from startPosition to endPosition following chess rules and knight legal movements.

Example: `knightMoves([0, 0], [3, 3]);`

```
Your input was: knightMoves([0,0],[3,3])
=> You made it in 2 moves! Here's your path:
[0,0]
[2,1]
[3,3]
```