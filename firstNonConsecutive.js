/**
 * Created by AIl on 2017/11/30.
 */
function firstNonConsecutive (arr) {
  for(let i = 0, len = arr.length; i < len - 1; i++ ){
    if(arr[i+1] - arr[i] > 1){
      console.log(arr[i+1])
      return arr[i+1]
    }
  }
  console.log('none')
  return 'None'
}
firstNonConsecutive([1,2,3,4,5,6,7,9])