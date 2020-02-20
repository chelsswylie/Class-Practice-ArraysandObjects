var char = [
  { name: "Tim", health: "2" },
  { name: "Tom", health: "4" },
  { name: "Jim", health: "9" }
];

//this is an array ^^^^^
var opponent = {
  name: "Bowser",
  health: "10"
};
//this is an object ^^^^

//looping below for printing name and health
const allPlayers = (...arg) => {
  for (let i in arg) {
    console.log("name", i.name);
    console.log("health", i.health);
  }

  allPlayers(...arr);
  allPlayers(opponent);
};
//prompts end user for a number
pickChar = prompt("Pick a number: 1, 2, or 3?");
{
  if (pickChar === "1") {
    console.log("Great! You are playing as Tim");
  } else if (pickChar === "2") {
    console.log("Great! You are playing as Tom");
  } else pickChar === "3";
  {
    console.log("Great! You are playing as Jim");
  }
}
//function below to be used to determine random damage done
function damageDone() {
  return Math.floor(Math.random() * 5 + 1);
}
//function below starts battle
function startBattle() {
  while (opponent.health > 0) {
    let proceed = alert("...and a devastating blow was delivered!");
  }
  console.log(
    `${pickChar}'s Health: ${char.health} -= Math.floor(Math.random() * 2 + 1)`
  );
  console.log(
    `${opponent}'s Health: ${opponent.health} -= Math.floor(Math.random() * 2 + 1)`
  );
  if (char.health <= 0) {
    console.log("You've lost");
    break;
  } else opponent.health <= 0;
  {
    console.log("Congratulations! You won!");
  }
}
