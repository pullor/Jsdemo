/**
 * Created by AIl on 2017/11/29.
 */
function foo(i) {
    var arr = [], num='';
    while (i>=1) {
      arr.unshift(Math.pow(i%10, 2))
      i=Math.floor(i/10);
    }
    for(let j=0, len = arr.length; j<len; j++) {
      num += arr[j].toString()
    }
  return num
}
foo(234252345)