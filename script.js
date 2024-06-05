

function openFeature(evt, featureName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablink" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(featureName).style.display = "block";
    evt.currentTarget.className += " active";
}

function hexToRgb(hex) {
    let bigint = parseInt(hex.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return [r, g, b];
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function blendColors(color1, color2, percentage) {
    let [r1, g1, b1] = hexToRgb(color1);
    let [r2, g2, b2] = hexToRgb(color2);
    let r = Math.round(r1 + percentage * (r2 - r1));
    let g = Math.round(g1 + percentage * (g2 - g1));
    let b = Math.round(b1 + percentage * (b2 - b1));
    return rgbToHex(r, g, b);
}
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const numberOfCircles = 10;

    for (let i = 0; i < numberOfCircles; i++) {
        let circle = document.createElement('div');
        circle.className = 'circle';
        body.appendChild(circle);
        animateCircle(circle);
    }
});

function animateCircle(circle) {
    const duration = Math.random() * 5000 + 2000;
    const offsetX = Math.random() * window.innerWidth;
    const offsetY = Math.random() * window.innerHeight;

    circle.style.transition = `transform ${duration}ms linear`;
    circle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    setTimeout(() => {
        animateCircle(circle);
    }, duration);
}

function changeHeroBackgroundColor() {
    const homeSection = document.querySelector('.home');
    const initialColor = '#000'; // Initial background color
    const finalColor = '#fff'; // Final background color
    const duration = 1000; // Transition duration in milliseconds

    let startTime;
    function animateColor(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1); // Ensure percentage does not exceed 1
        const blendedColor = blendColors(initialColor, finalColor, percentage);
        homeSection.style.backgroundColor = blendedColor;
        
        if (progress < duration) {
            requestAnimationFrame(animateColor);
        }
    }

    requestAnimationFrame(animateColor);
}

// Add event listener to the <a> tag in the hero section


// Add event listener to the <a> tag in the hero section
var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function showsidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}
function hidesidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display ='none'
}