var firstTab = document.getElementById("first-tab");
var secondTab = document.getElementById("second-tab");
var thirdTab = document.getElementById("third-tab");
var fourthTab = document.getElementById("fourth-tab");

var firstTabContainer = document.getElementById("first-tab-container");
var secondTabContainer = document.getElementById("second-tab-container");
var thirdTabContainer = document.getElementById("third-tab-container");
var fourthTabContainer = document.getElementById("fourth-tab-container");


firstTab.addEventListener("click", () => {

    if(firstTabContainer.classList.contains('show')){

        firstTabContainer.classList.remove('show');
        firstTabContainer.classList.add('hidden');

        
    } else {
        
        firstTabContainer.classList.remove('hidden');
        firstTabContainer.classList.add('show');
        firstTab.classList.remove('opacity');

        secondTabContainer.classList.remove('show');
        secondTabContainer.classList.add('hidden');
        secondTab.classList.add('opacity');

        thirdTabContainer.classList.remove('show');
        thirdTabContainer.classList.add('hidden');
        thirdTab.classList.add('opacity');

        fourthTabContainer.classList.remove('show');
        fourthTabContainer.classList.add('hidden');
        fourthTab.classList.add('opacity');
        
    }
    

});

secondTab.addEventListener("click", () => {

    if(secondTabContainer.classList.contains('show')){

        secondTabContainer.classList.remove('show');
        secondTabContainer.classList.add('hidden');

        
    } else {

        secondTab.classList.remove('opacity');
        
        secondTabContainer.classList.remove('hidden');
        secondTabContainer.classList.add('show');

        firstTabContainer.classList.remove('show');
        firstTabContainer.classList.add('hidden');
        firstTab.classList.add('opacity');

        thirdTabContainer.classList.remove('show');
        thirdTabContainer.classList.add('hidden');
        thirdTab.classList.add('opacity');

        fourthTabContainer.classList.remove('show');
        fourthTabContainer.classList.add('hidden');
        fourthTab.classList.add('opacity');

    }
    

});

thirdTab.addEventListener("click", () => {

    if(thirdTabContainer.classList.contains('show')){

        thirdTabContainer.classList.remove('show');
        thirdTabContainer.classList.add('hidden');
        
    } else {

        thirdTabContainer.classList.remove('hidden');
        thirdTabContainer.classList.add('show');
        thirdTab.classList.remove('opacity');

        firstTabContainer.classList.remove('show');
        firstTabContainer.classList.add('hidden');
        firstTab.classList.add('opacity');

        secondTabContainer.classList.remove('show');
        secondTabContainer.classList.add('hidden');
        secondTab.classList.add('opacity');

        fourthTabContainer.classList.remove('show');
        fourthTabContainer.classList.add('hidden');
        fourthTab.classList.add('opacity');

    }
    

});

fourthTab.addEventListener("click", () => {

    if(fourthTabContainer.classList.contains('show')){

        fourthTabContainer.classList.remove('show');
        fourthTabContainer.classList.add('hidden');
        
    } else {
        
        fourthTabContainer.classList.remove('hidden');
        fourthTabContainer.classList.add('show');
        fourthTab.classList.remove('opacity');

        firstTabContainer.classList.remove('show');
        firstTabContainer.classList.add('hidden');
        firstTab.classList.add('opacity');

        secondTabContainer.classList.remove('show');
        secondTabContainer.classList.add('hidden');
        secondTab.classList.add('opacity');

        thirdTabContainer.classList.remove('show');
        thirdTabContainer.classList.add('hidden');
        thirdTab.classList.add('opacity');

    }
    

});