function differenceInAges(ages) {
  let firstArr = ages;
  let sortArr = [...firstArr].sort(sortNumber);
  let last = sortArr.slice(-1).slice(-1)[0];
  let diff = last - sortArr[0];
  let ansArr = [sortArr[0], last, diff];
  return ansArr;
}
function sortNumber(a, b) {
  return a - b;
}
console.log(differenceInAges([82, 15, 6, 38, 35]));
