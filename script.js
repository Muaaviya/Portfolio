document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelectorAll(".skill-button").forEach((button) => {
  button.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
  });
  button.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  this.reset();
});
