/**
 * Created by AIl on 2017/11/30.
 */
function rakeGarden(garden) {
  var rakedGarden;
  rakedGarden = garden.split(" ");
  for(let i = 0, len = rakedGarden.length; i < len; i ++){
    if(rakedGarden[i] != 'gravel' && rakedGarden[i] != 'rock') {
      rakedGarden[i] = 'gravel'
    }
  }

  rakedGarden = rakedGarden.join(" ");
  console.log(rakedGarden)
  return rakedGarden;
}
var garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
 rakeGarden(garden)