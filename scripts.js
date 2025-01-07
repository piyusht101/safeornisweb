// JavaScript for toggle functionality
// Get all FAQ items
const faqItems = document.querySelectorAll(".faq-item");

// Add click event listener to each FAQ item
faqItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    // Close all other FAQ items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("open");
      }
    });

    // Toggle the clicked FAQ item
    item.classList.toggle("open");
  });
});

/*new navbar*/
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

/* glance portfoliomreplacement */
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

// Show the selected slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
    dots[i].classList.remove("active");
  });
  dots[index].classList.add("active");
  currentSlide = index;
}

// Navigate to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Navigate to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Event listeners for navigation arrows
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});
document
  .getElementById("meeting-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Simple form validation
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    if (name && email && phone && date && time) {
      alert(
        "Thank you for booking a meeting! We will get in touch with you soon."
      );
      // Reset form
      document.getElementById("meeting-form").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
// Optional JavaScript for additional hover or interactive effects
document.addEventListener("DOMContentLoaded", () => {
  const shapes = document.querySelectorAll(".circle, .triangle, .square");

  shapes.forEach((shape) => {
    shape.addEventListener("mouseenter", () => {
      shape.style.transform = "scale(1.2)";
    });

    shape.addEventListener("mouseleave", () => {
      shape.style.transform = "scale(1)";
    });
  });
});

/** about us */
// Scroll-triggered Counter Animation
const clients = document.getElementById("clients");
const projects = document.getElementById("projects");
const awards = document.getElementById("awards");

let counterStarted = false;

window.addEventListener("scroll", () => {
  const aboutSection = document.getElementById("about-us");
  const sectionPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (sectionPosition < screenPosition && !counterStarted) {
    startCounter(clients, 300);
    startCounter(projects, 500);
    startCounter(awards, 25);
    counterStarted = true;
  }
});

function startCounter(element, max) {
  let count = 0;
  const speed = Math.floor(2000 / max);

  const updateCounter = () => {
    count += 1;
    element.innerText = count;
    if (count < max) {
      setTimeout(updateCounter, speed);
    }
  };

  updateCounter();
}

// Button Scroll Smoothly to Bottom
const learnMoreBtn = document.querySelector(".learn-more-btn");
learnMoreBtn.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});
