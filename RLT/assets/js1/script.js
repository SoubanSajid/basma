function toggleNav() {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.toggle('open');
}

// ✅ Close side menu when any link is clicked
document.querySelectorAll('#sideMenu .nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('sideMenu').classList.remove('open');
  });
});

// ✅ Handle AR / ENG buttons (both desktop & mobile)
// document.querySelectorAll("#btn-ar").forEach(btn => {
//   btn.addEventListener("click", function () {
//     window.location.href = "/RLT/index.html"; // Arabic page
//   });
// });

// document.querySelectorAll("#btn-eng").forEach(btn => {
//   btn.addEventListener("click", function () {
//     window.location.href = "/Main/index.html"; // English page
//   });
// });

// ✅ Remove broken code for #navMenu (it doesn't exist in your HTML)

// Card slider (RTL friendly)
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".card-slider");

  if (slider) {
    let scrollAmount = 0;
    const cards = slider.querySelectorAll(".card-h");
    const cardWidth = cards[0]?.offsetWidth || slider.clientWidth * 0.8;
    const gap = 15;

    const isRTL = getComputedStyle(slider).direction === "rtl";

    setInterval(() => {
      if (isRTL) {
        scrollAmount -= cardWidth + gap;
        if (scrollAmount <= -(slider.scrollWidth - slider.clientWidth)) {
          scrollAmount = 0;
        }
      } else {
        scrollAmount += cardWidth + gap;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0;
        }
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }, 4000);
  }
});

// Goal card "read more" logic
document.querySelectorAll('.goal-card').forEach(card => {
  const readMoreBtn = card.querySelector('.read-more');
  const closeBtn = card.querySelector('.close-btn');

  readMoreBtn?.addEventListener('click', () => {
    card.classList.add('show-more');
    readMoreBtn.style.display = 'none';
    closeBtn.style.display = 'inline';
  });

  closeBtn?.addEventListener('click', () => {
    card.classList.remove('show-more');
    readMoreBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
  });
});

// Sticky navbar + hide on scroll
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar-");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar-");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});

// Scroll spy to highlight current section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a, footer a[href^='#']");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});