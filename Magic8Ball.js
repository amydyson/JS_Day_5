// Magic 8 Ball Challenge
// Story
//
// As a user I can enter a question on a web page and magically get an answer to my question.
// Goal:
//
// Create an array with the following answers: Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, then do the opposite, Your answer here.
// Input a question from the user.
// Create a random number to select one of the answers (hint: use Math.random() and change the magnitude).
// Output the question with the random answer.
// Stretch goal:
//



// Put the question and answer into a loop that stops when the user enters STOP.
function eightBall()  {
  // var q = document.getElementById('questionBox');
  // document.getElementById('num') = ""; Note this did not work without .value like the similar line of code in high low (amy put this here to check understanding later)
  var q = document.getElementById("questionBox").value;
  console.log("q is: " + q);
  document.getElementById("questionBox").value = "";
  var a = ["Yup!", "Fuhgeddaboudit", "Maybe", "what would your mother do?",
  "what would an Australian do, then do the opposite", "Go home"]
  var p = Math.floor(Math.random()* 6);
  if (!q){
    document.getElementById('answer').innerHTML = "Give me a question";
  }else if(q == "stop" || q == "STOP"){
    document.getElementById('answer').innerHTML = "Okay that's enough"

  }

  else{
    document.getElementById('answer').innerHTML = (a[p]);
  }

}
