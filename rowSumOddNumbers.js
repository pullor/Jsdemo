/**
 * Created by AIl on 2017/11/30.
 */
function rowSumOddNumbers(n) {
  var num = 0, sum =0;
  for (let i = 0; i <= n; i++) {
    num += i
  }
  var star = (num - n + 1) * 2 -1;
  var end = num * 2 -1;
  sum = star;
  while (star < end) {
    star +=2;
    sum += star;
  }
  return sum;
}
rowSumOddNumbers(42)