/**
 * Created by AIl on 2017/11/30.
 */
function  calculateAge() {
  var age = arguments[1] - arguments[0];
  if( age > 1) {
    console.log('You are ' + age + ' years old')
    return 'You are ' + age + ' years old.'
  } else if(age == 1) {
    console.log('You are ' + age + ' year old')
    return 'You are ' + age + ' year old.'
  } else if (age == 0) {
    console.log('You were born this very year!')
    return 'You were born this very year!'
  } else if (age == -1){
    console.log('You will be born in ' + Math.abs(age) + ' year')
    return 'You will be born in ' + Math.abs(age) + ' year.'
  }else {
    console.log('You will be born in ' + Math.abs(age) + ' years')
    return 'You will be born in ' + Math.abs(age) + ' years.'
  }
}
calculateAge(123, 124)