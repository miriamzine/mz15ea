document.getElementById("blue").style.color="blue";
document.getElementById("green").style.color="green";
document.getElementById("red").style.color="red";


function mix(){

	var first = "#00BB00";
	var second = "#BB9320";
	var third = "#AB00FF";

	document.getElementById("blue").style.color=first;
	document.getElementById("green").style.color=second;
	document.getElementById("red").style.color=third;

}



function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
}
