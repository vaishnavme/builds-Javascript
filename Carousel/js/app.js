const slides = document.querySelectorAll(".carousel-item");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const totalSilde = slides.length;

//console.log(totalSilde)
let currentSlidePosition = 0;

function displaySlide() {
    console.log("display");
    for(slide of slides) {
        console.log(currentSlidePosition)
        slide.classList.remove("carousel-visible");
    }
    slides[currentSlidePosition].classList.add("carousel-visible");
}

function previousSlide() {
    currentSlidePosition--;
    if(currentSlidePosition < 0) {
        currentSlidePosition = totalSilde - 1;
    }
    displaySlide()
}

function nextSlide() {
    currentSlidePosition++;
    if(currentSlidePosition > totalSilde - 1) {
        currentSlidePosition = 0;
    }
}

prev.addEventListener("click", previousSlide)
next.addEventListener("click", nextSlide)
