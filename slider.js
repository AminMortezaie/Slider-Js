var slideIndex = 0;
var timer = null;

var slides = document.getElementsByClassName("mySlides");
createSpan();
showSlides();


function createSpan() {
    var parent = document.getElementsByClassName("mySpan")[0];
    var child;
    for (let i = 0; i < slides.length; i++) {
        child = document.createElement("span");
        child.setAttribute("class", "dot");
        child.addEventListener("click", () => {
            currentSlide(i + 1);
        });
        parent.appendChild(child);
    }
}


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

console.log(document.getElementsByClassName("next"));

for (let i = 0; i < document.getElementsByClassName("next").length; i++) {
    document.getElementsByClassName("next").item(i).onclick = () => plusSlides(1);
}
for (let i = 0; i < document.getElementsByClassName("prev").length; i++) {
    document.getElementsByClassName("prev").item(i).onclick = () => plusSlides(-1);
}

function showSlides() {
    var i;
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
    if (slideIndex <= 0) {
        slideIndex = slides.length;
    }
    console.log(slideIndex);

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    timer = setTimeout(showSlides, 2000);

}

