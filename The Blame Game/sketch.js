console.log("Let's play a game with sacrifical pieces.");

var play = prompt("What piece would you like to play as?" + "\n 1. Pawn" + "\n 2. Bishop" + "\n 3. Rook" + "\n 4. Knight" + "\n 5. Queen" + "\n 6. King");

if(play == 1)
{
  console.log("So you have chosen to be the puppet, rather than the puppeteer. An interesting choice, indeed. Roll your Will.");
}
else if (play == 2)
{
  console.log("Your greatest power is your ability to sway others to your cause. Roll your Wisdom.");
}
else if (play == 3)
{
  console.log("You will guard those under your charge until your final breath. Roll your Fortitude.");
}
else if (play == 4)
{
  console.log("You lead with a heavy heart and a sturdy sword. Roll your Charisma.");
}
else if (play == 5)
{
  console.log("Your sword is mightier than the pen. Roll your Strength.");
}
else if (play == 6)
{
  console.log("You have watched empires rise and crumble, but yours will not be taken. Roll your Intelligence.");
}

function diceRoll_STR()
{
  console.log("Strength: " + Math.ceil(Math.random() * 20));
}

function diceRoll_DEX()
{
  console.log("Dexterity: " + Math.ceil(Math.random() * 20));
}

function diceRoll_CON()
{
  console.log("Constitution: " + Math.ceil(Math.random() * 20));
}

function diceRoll_INT()
{
  console.log("Intelligence: " + Math.ceil(Math.random() * 20));
}

function diceRoll_WIS()
{
  console.log("Wisdom: " + Math.ceil(Math.random() * 20));
}

function diceRoll_CHA()
{
  console.log("Charisma: " + Math.ceil(Math.random() * 20));
}

function diceRoll_Will()
{
  console.log("Will: " + Math.ceil(Math.random() * 20));
}

function diceRoll_Fortitude()
{
  console.log("Fortitude: " + Math.ceil(Math.random() * 20));
}

function diceRoll_Reflex()
{
  console.log("Reflex: " + Math.ceil(Math.random() * 20));
}

function diceRoll_Enemy()
{
  console.log("Enemy: " + Math.ceil(Math.random() * 20));
}

function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background("black");
}