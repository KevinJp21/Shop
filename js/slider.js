const slider = document.querySelector("#slider");
const text = document.querySelector("#text");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length-1];
let sliderText = document.querySelectorAll(".central_text");
let sliderTextLast = sliderText[sliderText.length-1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);/*Mueve la ultima imagen al inicio */
function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.margineft = "-100%";

    

    setTimeout(function(){
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        text.insertAdjacentElement('beforeend',sliderTextFirs)
        slider.style.marginLeft = "-100%";

    
    },500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.margineft = "0";
  
    setTimeout(function(){

        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);
}

btnRight.addEventListener('click',function() {
    Next();
});

btnLeft.addEventListener('click',function(){
    Prev();
});

setInterval(function(){
    Next();



