//. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
//write an if-else chain.
let alienColor = "green";


//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if(alienColor == " green"){
    console.log("you just earned 5 points for shooting the alien.");
}else{
    console.log( "you just earned 10 points."); 
    
}

// Write one version of this program that runs the if block and another that runs the else block.

alienColor = "yellow";
if (alienColor == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else{
  console.log("You just earned 10 points");
}
