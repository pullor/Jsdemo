/**
 * Created by AIl on 2017/11/30.
 */
function numberOfRectangles(m, n) {
  var total = 0;
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j<= n; j++) {
      total += (m - i + 1) * (n - j + 1)
    }
  }
  console.log(total)
  return total
}
numberOfRectangles(3, 2);