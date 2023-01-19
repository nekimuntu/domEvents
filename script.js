var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.innerText = "Delete";
	deleteButton.id="btn"+input.value;
	li.appendChild(document.createTextNode(input.value+" "));
	li.appendChild(deleteButton);
	li.id= input.value;
	ul.appendChild(li);	
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleElement(event){
	if(event.target.localName!=="button"){
		var li = event.target;
		li.classList.toggle("done");
		console.log(event);
	}else{
		var s =  new String;
		s = event.target.attributes.id.value;
		s=s.slice(3);
		var liToRemove=document.getElementById(s)
		console.log(liToRemove);
		deleteElement(liToRemove);
	}
}

function deleteElement(value){
	ul.removeChild(value)
}

ul.addEventListener("click",toggleElement);
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);