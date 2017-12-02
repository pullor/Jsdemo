/**
 * Created by AIl on 2017/11/30.
 */
function abundantNumber(num) {
  var obj = {},sum = 0;
  for(let i = 1;i <= num; i++){
    for(let j = 1;j < num; j++){
      if(i * j == num){
        obj[j] = j;
      }
    }
  }
  for(m in obj){
    sum += parseInt(m)
  }
  if(sum > num){
    return true
  } else {
    return false
  }
}
abundantNumber(12)