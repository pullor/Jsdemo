/**
 * Created by AIl on 2017/11/30.
 */
function validateEAN(eanCode) {
  var str = eanCode.toString(),
      sum = 0, tem;
  var arr = str.split('');
  for (let i = 0, len = arr.length; i < len - 1; i++){
    if(i % 2 != 0) {
      arr[i] = arr[i] * 3;
    }
    sum += parseInt(arr[i])
  }
  console.log(arr[arr.length - 1])
  console.log(sum % 10)
  if(sum % 10 == 0 && arr[arr.length - 1] == 0) {
    return true
  } else if (10 - sum % 10 == arr[arr.length -1]) {
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
  console.log(arr)
  console.log(sum)
}
validateEAN(4003301018398);