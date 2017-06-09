


function calcTip(){

  var total = +document.getElementById("totalBill").value;
  console.log("total is: " + total);
  var tip = total * .20;
  alert("Your 20% tip will be $" + tip.toFixed(2));

  total= total + tip;

  if (!total){

    document.getElementById("tipTotal").innerHTML = "Put in a dollar amount";
    return;

  }

  document.getElementById("tipTotal").innerHTML = "Your total is $" + total.toFixed(2);


  document.getElementById("totalBill").value = "";



}
