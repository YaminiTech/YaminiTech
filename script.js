// 📩 Handle contact form submission
/*document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents page from reloading
  alert("Thanks! Your message has been sent.");
  this.reset(); // Clears the form inputs
});*/

// 🎯 Scroll reveal for all sections with class "reveal"
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    // If element is visible in the viewport, add "active" class
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  }
}

// Apply on scroll and on page load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
