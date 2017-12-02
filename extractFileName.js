/**
 * Created by AIl on 2017/11/30.
 */

  function extractFileName (dirtyFileName) {
  var reg = /[a-zA-z]+\.[a-zA-z_]+/;
  var tem = dirtyFileName.match(reg);
  var tem = reg.exec(dirtyFileName).toString()
  if(tem.indexOf('_') == 0) {
    tem = tem.substring(1)
  }
  console.log(tem)
  return tem
  }
  extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION ' )