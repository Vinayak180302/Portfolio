// Initialize AOS
AOS.init();

const phrases = [
  "Developer",
  "FrontEnd Developer",
  "Fullstack Developer",
  "Software Developer",
  "Tech Enthusiast",
  "Problem Solver",
];
let current = 0;
const textElement = document.getElementById("changing-text");

setInterval(() => {
  textElement.style.opacity = 0; // Fade out
  setTimeout(() => {
    current = (current + 1) % phrases.length;
    textElement.textContent = phrases[current];
    textElement.style.opacity = 1; // Fade in
  }, 500); // Matches transition duration
}, 2500); // Change every 2.5 seconds

//for form submition

const form = document.getElementById("contact-form");
const thankYouMsg = document.getElementById("thank-you-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://formsubmit.co/vinayakkumkar2002@gmail.com", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        thankYouMsg.style.display = "block";
      } else {
        alert("Something went wrong. Please try again later.");
      }
    })
    .catch((error) => console.error("Error:", error));
});


