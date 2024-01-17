//burger
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-burger-button").addEventListener("click", function() {
        document.querySelector("nav").classList.toggle("open")
    })
});

//Close burger by Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector("nav").classList.remove("open")
    }
});

// Close burger by outer click
document.getElementById("open-menu-burger").addEventListener('click', event => {
    /*event._isClickWithInMenu = true; menu is still open*/
    if (event._isClickWithInMenu) return;
    document.querySelector("nav").classList.remove("open")
});
document.getElementById("menu-burger-button").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector("nav").classList.remove("open") 
});

// Slider Education
let slideNumber = 0;
const slider = document.getElementById('slider-wrapper');
const arrowLeft = document.getElementById("leftCarret");
const arrowRight = document.getElementById("rightCarret");
const counter = document.getElementById('counter');
const slides = document.getElementsByClassName("slider-img");

const handleOffset = () => {
    const sliderWindow = document.getElementById('slider');
    const sliderWidth = sliderWindow.offsetWidth;

    const offset = sliderWidth * slideNumber;
    slider.style.left = -offset + 'px';
    counter.innerText = slideNumber + 1 + "/" + slides.length;
}

const plusSlides = (n) => {
 if (slideNumber === 1 && n > 0) {
    slideNumber = 0;
 } else if (slideNumber === 0 && n < 0) {
    slideNumber = 1;
 } else {
    slideNumber += n;
 }
 handleOffset();
}

// swipe
document.getElementById('slider-wrapper').addEventListener('touchstart', handleTouchStart, false);     
document.getElementById('slider-wrapper').addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(event) {                                        
    xDown = event.touches[0].clientX;                                      
    yDown = event.touches[0].clientY;                                   
};                                                

function handleTouchMove(event) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = event.touches[0].clientX;                                    
    let yUp = event.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    const slides = document.getElementsByClassName("slider-img");

    
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            /* left swipe */ 
            if (slideNumber + 1 === slides.length) {
                slideNumber = 0;
            } else {
                slideNumber += 1;
            }
        } else {
            /* right swipe */
            if (slideNumber === 0) {
                slideNumber = slides.length - 1;
            } else {
                slideNumber -= 1;
            }
        }
        handleOffset();                       
    } 
    xDown = null;
    yDown = null;                                             
};

