function add(){

  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;


var sum = Number(num1) + Number(num2);
//add the two numbers together

document.write(sum);

//out the value to the screen replacing output
document.getElementbyId("output").innerHTML = sum

}
