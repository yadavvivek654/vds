const images = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg"
];

let index = 0;
const img = document.getElementById("carouselImage");

function showSlide(){
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = images[index];
    img.style.opacity = 1;
  }, 400);
}

function nextSlide(){
  index = (index + 1) % images.length;
  showSlide();
}

function prevSlide(){
  index = (index - 1 + images.length) % images.length;
  showSlide();
}

// AUTO SLIDE
setInterval(nextSlide, 5000);

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

