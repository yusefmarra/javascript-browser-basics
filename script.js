var name = window.prompt('What is your name?');
var age = window.prompt('Cool, cool... how old you?');

window.alert("Hello " + name + ". " + age + " is fucking old. You ride a mobility scooter or what?");

window.onload = function() {
  var nameElement = document.getElementById('name');
  nameElement.innerHTML = "Hello " + name + ". You are so old it takes this long to count to your age:<br>";
  for (i = 1; i<=age; i++) {
    nameElement.innerHTML += i + "<br>";
  }
};
// var nameElement = document.createElement("div");
//
// nameElement.appendChild(document.createTextNode('Hello '+name));
//
// var h1 = document.getElementById('name');
// document.body.insertInto(nameElement, h1);
