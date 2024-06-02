let images = ['pf1.jpeg', 'pf3.jpg', 'pf4.webp', 'planetfitness.jpeg']; 

let currentImageIndex = 0;
let image = document.getElementById('slide-image');

function slideImage() {
  image.classList.add('slide-right');

  setTimeout(function() {
    image.classList.remove('slide-right');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    image.src = images[currentImageIndex];
  }, 100); 
}
