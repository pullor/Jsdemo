/**
 * Created by AIl on 2017/11/30.
 */
String.prototype.digit = function() {
  var reg = /^[0-9]+$/;
  if(reg.test(this)){
    console.log(true);
    return true
  }
  return false;
};

'7'.digit();