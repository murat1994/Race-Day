let raceNumber = Math.floor(Math.random()*1000);  
var registeredEarly = true;
var runnersAge = prompt("how many age?");       

if(registeredEarly === true && runnersAge > 18){
  raceNumber += 1000;
  }

if( registeredEarly && runnersAge > 18){
  console.log(`you will race at 9:30 am with the number ${raceNumber}`);
} else if( !registeredEarly && runnersAge > 18){
  console.log(`you will race at 11 am with the number ${raceNumber}`);
} else if( runnersAge < 18) {
  console.log(`you will race at 12:30 am with the number ${raceNumber}`);
} else {
  console.log("You are 18 years old??? Please see registration desk")
}