/**
 * Created by AIl on 2017/11/30.
 */
function unflatten (flatArray)
{
  var newarr= [], childarr = [];
  for (var i = 0; flatArray[i] !=null; i++){
    if(flatArray[i] < 3) {
      var singl = flatArray.splice(i,1).toString()
      newarr.push(singl)

    } else {
      var tem = flatArray[i-1]
      console.log(tem, 'tem')
      // childarr = flatArray.splice(i - 1,tem);
      console.log(flatArray)
      newarr.push(flatArray.splice(i - 1,tem));

    }
  }
  console.log(flatArray, 'flatArray')
  console.log(newarr, 'newarr')
}
unflatten([1,4,5,2,1,2,4,5,2,6,2,3,3])