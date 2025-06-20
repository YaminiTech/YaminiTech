// 📩 Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form behavior (page reload)
  alert("Thank you! Your message has been sent.");
  this.reset(); // Clear the form fields
});

// 🎯 Scroll reveal animation for sections
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active"); // Add active class when in view
    }
  }
}

// Run reveal function on scroll and page load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// 🌗 Dark/light mode toggle
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark"); // Toggle dark class on body
});

