//Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.



//If the user's guess is too high or too low, the computer notifies them of that
//Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.
//Computer picks random number 1-100

function numberPick(){
  var equation = (Math.floor((Math.random() * 100) + 1));
  return equation;
}

var equation = numberPick();
var attempt = 1;
var name ="";

//Visibility did not work, didn't hidden
function userName(){
    name = (document.getElementById("namePrompt").value);
    getElementById("nameBox").style.visibility='hidden';

    return name;
}

//User picks number and compares to computer number
function userGuess(){
  var guess = +(document.getElementById("num").value);
  console.log("guess is: " + guess);
  // alert("guess is now: " + guess);
  // var attempt = 1;
  console.log(equation);
  if (attempt < 7) {
    console.log("variable attempt is: " + attempt);
    if (+guess > equation){
      document.getElementById('result').innerHTML = "Guess Lower";
      guess = document.getElementById('num').value;
      document.getElementById('num') = "";
    }
    else if (+guess < equation){
      document.getElementById('result').innerHTML = "Guess Higher";
      guess = document.getElementById('num').value;
      document.getElementById('num').value = "";
    }
    else if(+guess === equation){
      document.getElementById('result').innerHTML = "You Win, " + name + "!";
      document.getElementById('num').value = "";
    }

    //(else if(guess==NaN) did NOT work). This is saying if guess is not an integer do this
    else if(!guess)
      document.getElementById('result').innerHTML = "Your guess is not a number";
      document.getElementById('num').value = "";
    }
  if (!guess){
    console.log("do nothing here")
  }else {
  attempt++;
  }
  if (attempt == 8){
      document.getElementById('result').innerHTML = "You Lose!";
      document.getElementById('num').value = "";
    }
}

//If the user has not guessed the secret number in seven tries, the user loses.



//Stretch goal 2

//Validate the user's input. If the user puts a anything other than a number, tell the user they can only use numbers.
// Hint: To create a number from a string in javascript use parseInt( ). See: Description.
//
// Stretch goal 3
//
// Allow the user to put their name in before the game starts. When the user has won the game, let the user know they have won, using their name.
