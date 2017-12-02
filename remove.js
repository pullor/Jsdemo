/**
 * Created by AIl on 2017/11/30.
 */
function remove(s){
  var reg = /[!]*$/
  var arr = s.split(' ');
  var arr2 = [];
  for(let i = 0, len = arr.length; i < len; i++){
    arr2.push(arr[i].replace(reg, ''))
  }
  console.log(arr2.join(' '))
  return arr2.join(' ')
}
remove('!!hi! !!!Hi !!hi!!! !hi')