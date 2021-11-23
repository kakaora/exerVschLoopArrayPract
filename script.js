var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

length = officeItems.length;
var count = 0;

for (var i = 0; i < length; i++){
    console.log(officeItems[i])
    if (officeItems[i] == 'computer'){
      count ++;
    }
}
console.log(count)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

length2 = peopleWhoWantToSeeMadMaxFuryRoad.length;

for (var j = 0; j < length2; j++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[j].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + 
            " is old enough :)")
        }
        else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + 
            " is not old enough :(")
}
        
}
console.log(count)