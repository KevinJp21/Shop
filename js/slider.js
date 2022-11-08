const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);/*Mueve la ultima imagen al inicio */

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.margineft = "-200%";
    

    setTimeout(function(){
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
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
},8000);