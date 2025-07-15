var textArea = document.getElementById("textarea");
var count = document.getElementById("count");
console.log(textArea.value.length);

textArea.addEventListener('input', () => {

    var textAreaLength = textArea.value.length;
    console.log(textAreaLength);
    
    count.innerText = textAreaLength;

    if(textAreaLength >= 250){
        textArea.classList.add('border-red');
    } else {
        textArea.classList.remove('border-red');
    }
    
});