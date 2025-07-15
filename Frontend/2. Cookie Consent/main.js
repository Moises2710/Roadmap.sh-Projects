var button = document.getElementById("button");
var container = document.getElementById("container");
var message = document.getElementById("message");
var close = document.getElementById("close");
var confirmMessage = document.getElementById("confirm-message");


function existLocalStorage(key) {
  return localStorage.getItem(key) !== null;
}

if (existLocalStorage("message")) {
    container.classList.add('hidden');
    message.innerHTML = "<p>You have our cookies. Excellent</p>";
}

function acceptCookie(){
    
    container.classList.add('hidden');
    
    const cookie = localStorage.setItem("message",'Hello. Mi name is Moisés Coronado. This is the value using localStorage');
    var value = localStorage.getItem('message');
    console.log(value);
    
    message.innerHTML = "<p>You accepted our cookies. Thank you</p>";
}

function notAcceptCookie(){

    result = confirm("Are you sure you don't want our cookies?");

    if(result){
        container.classList.add('hidden');
        message.innerHTML = "<p>You don't accepted our cookies</p>";
    } 

}

button.addEventListener('click', acceptCookie);

close.addEventListener('click', notAcceptCookie);