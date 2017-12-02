/**
 * Created by AIl on 2017/11/29.
 */
function decomose(n) {
  var total, m = n - 1, obj={}, t = 0;
  total = Math.pow(n, 2);
  function getnum(m) {
    while (m > 0) {
      total = total - Math.pow(m, 2);
      obj[m]=m;
      m = Math.floor(Math.sqrt(total));
    }
    for(let j in obj) {
      t += Math.pow(j, 2);
    }
    console.log(obj)
    console.log(t, 111)
  }
  getnum(m)
}
decomose(50)