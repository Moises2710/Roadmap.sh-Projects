var button1 = document.getElementById('button-1');
var button2 = document.getElementById('button-2');
var button3 = document.getElementById('button-3');
var button4 = document.getElementById('button-4');
var button5 = document.getElementById('button-5');
var button6 = document.getElementById('button-6');

var paragraph1 = document.getElementById('paragraph-1');
var paragraph2 = document.getElementById('paragraph-2');
var paragraph3 = document.getElementById('paragraph-3');
var paragraph4 = document.getElementById('paragraph-4');
var paragraph5 = document.getElementById('paragraph-5');
var paragraph6 = document.getElementById('paragraph-6');

button1.addEventListener('click', () => {

    if(paragraph1.classList.contains('hidden')){

        paragraph1.classList.add('show');
        paragraph1.classList.remove('hidden');

        paragraph2.classList.add('hidden')
        paragraph2.classList.remove('show');
        paragraph3.classList.add('hidden')
        paragraph3.classList.remove('show');
        paragraph4.classList.add('hidden')
        paragraph4.classList.remove('show');
        paragraph5.classList.add('hidden')
        paragraph5.classList.remove('show');
        paragraph6.classList.add('hidden')
        paragraph6.classList.remove('show');

    } else {
        paragraph1.classList.remove('show');
        paragraph1.classList.add('hidden');
    }

});

button2.addEventListener('click', () => {

    if(paragraph2.classList.contains('hidden')){

        paragraph2.classList.add('show');
        paragraph2.classList.remove('hidden');

        paragraph1.classList.add('hidden')
        paragraph1.classList.remove('show');
        paragraph3.classList.add('hidden')
        paragraph3.classList.remove('show');
        paragraph4.classList.add('hidden')
        paragraph4.classList.remove('show');
        paragraph5.classList.add('hidden')
        paragraph5.classList.remove('show');
        paragraph6.classList.add('hidden')
        paragraph6.classList.remove('show');

    } else {
        paragraph2.classList.remove('show');
        paragraph2.classList.add('hidden');
    }

});

button3.addEventListener('click', () => {

    if(paragraph3.classList.contains('hidden')){

        paragraph3.classList.add('show');
        paragraph3.classList.remove('hidden');

        paragraph1.classList.add('hidden')
        paragraph1.classList.remove('show');
        paragraph2.classList.add('hidden')
        paragraph2.classList.remove('show');
        paragraph4.classList.add('hidden')
        paragraph4.classList.remove('show');
        paragraph5.classList.add('hidden')
        paragraph5.classList.remove('show');
        paragraph6.classList.add('hidden')
        paragraph6.classList.remove('show');

    } else {
        paragraph3.classList.remove('show');
        paragraph3.classList.add('hidden');
    }

});

button4.addEventListener('click', () => {

    if(paragraph4.classList.contains('hidden')){

        paragraph4.classList.add('show');
        paragraph4.classList.remove('hidden');

        paragraph1.classList.add('hidden')
        paragraph1.classList.remove('show');
        paragraph2.classList.add('hidden')
        paragraph2.classList.remove('show');
        paragraph3.classList.add('hidden')
        paragraph3.classList.remove('show');
        paragraph5.classList.add('hidden')
        paragraph5.classList.remove('show');
        paragraph6.classList.add('hidden')
        paragraph6.classList.remove('show');

    } else {
        paragraph4.classList.remove('show');
        paragraph4.classList.add('hidden');
    }

});

button5.addEventListener('click', () => {

    if(paragraph5.classList.contains('hidden')){

        paragraph5.classList.add('show');
        paragraph5.classList.remove('hidden');

        paragraph1.classList.add('hidden')
        paragraph1.classList.remove('show');
        paragraph2.classList.add('hidden')
        paragraph2.classList.remove('show');
        paragraph3.classList.add('hidden')
        paragraph3.classList.remove('show');
        paragraph4.classList.add('hidden')
        paragraph4.classList.remove('show');
        paragraph6.classList.add('hidden')
        paragraph6.classList.remove('show');

    } else {
        paragraph5.classList.remove('show');
        paragraph5.classList.add('hidden');
    }

});

button6.addEventListener('click', () => {

    if(paragraph6.classList.contains('hidden')){

        paragraph6.classList.add('show');
        paragraph6.classList.remove('hidden');

        paragraph1.classList.add('hidden')
        paragraph1.classList.remove('show');
        paragraph2.classList.add('hidden')
        paragraph2.classList.remove('show');
        paragraph3.classList.add('hidden')
        paragraph3.classList.remove('show');
        paragraph4.classList.add('hidden')
        paragraph4.classList.remove('show');
        paragraph5.classList.add('hidden')
        paragraph5.classList.remove('show');

    } else {
        paragraph6.classList.remove('show');
        paragraph6.classList.add('hidden');
    }

});

