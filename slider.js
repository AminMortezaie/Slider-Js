var slideIndex = 0;
var timer = null;
showSlides();


function plusSlides(n) {
    clearTimeout(timer);
    slideIndex += n - 1;
    showSlides();
}

function currentSlide(n) {
    clearTimeout(timer);
    slideIndex = n - 1;
    showSlides();
}


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    timer = setTimeout(showSlides, 2000);

}

