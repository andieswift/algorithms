//Write a function that returns the distance the snail must travel to the top of the tower
//given the height and length of each step and the height of the tower.

function totalDistance(height, length, tower) {
  const numOfStairs = tower / height;
  const totalLength = height * numOfStairs + length * numOfStairs;
  return Math.round(totalLength * 10) / 10;
}
