// 📩 Handle contact form submission with a simple alert
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  alert("Thank you! Your message has been sent.");
  this.reset(); // Clear form
});

// 💫 Reveal sections on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  }
}

// Run on scroll and page load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
