// Image carousel
let slideIndex = 1;
showSlides(slideIndex);

// Prev & next arrow buttons
function plusSlides(n)
{
    showSlides(slideIndex += n);
}

// Dot selection
function currentSlide(n)
{
    showSlides(slideIndex = n);
}

// Display the right slide (slide, dot, caption, slide number)
function showSlides(n) 
{
    slides = document.getElementsByClassName("causesSlides");
    dots = document.getElementsByClassName("dot");

    // Slides wrap around (if it is slide #0 it goes to slide #3, if it is slide #4 it goes to slide #1)
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Make all the slides invisible, then set the correct slide to be visible
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}