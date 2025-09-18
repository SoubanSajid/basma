function toggleNav() {
  const navMenu = document.getElementById('navMenu');
  const menuIcon = document.querySelector('.menu-icon');

  navMenu.classList.toggle('show'); // toggle open/close

  // Toggle icon
  if (navMenu.classList.contains('show')) {
    menuIcon.textContent = '✖'; // Close icon
  } else {
    menuIcon.textContent = '☰'; // Hamburger icon
  }
}

  document.getElementById("btn-ar").addEventListener("click", function () {
    window.location.href = "/RLT/index.html"; // Arabic page
  });

  document.getElementById("btn-eng").addEventListener("click", function () {
    window.location.href = "/Main/index.html"; // English page
  });

// Close nav when a link is clicked
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.getElementById('navMenu');
    const menuIcon = document.querySelector('.menu-icon');

    navMenu.classList.remove('show');
    menuIcon.textContent = '☰'; // reset back to hamburger
  });
});



// card slider (LTR simple version)
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".card-slider");

  if (slider) {
    let scrollAmount = 0;
    const cards = slider.querySelectorAll(".card-h");
    const cardWidth = cards[0]?.offsetWidth || slider.clientWidth * 0.8;
    const gap = 15; // matches CSS gap

    setInterval(() => {
      scrollAmount += cardWidth + gap; // move by one card + gap
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0; // reset to the beginning
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }, 4000); // slide every 4 seconds
  }
});




document.querySelectorAll('.goal-card').forEach(card => {
  const readMoreBtn = card.querySelector('.read-more');
  const closeBtn = card.querySelector('.close-btn');
  const extraText = card.querySelector('.extra-text');

  readMoreBtn.addEventListener('click', () => {
    card.classList.add('show-more');
    readMoreBtn.style.display = 'none';
    closeBtn.style.display = 'inline';
  });

  closeBtn.addEventListener('click', () => {
    card.classList.remove('show-more');
    readMoreBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
  });
});

//  navbar section ==========================================
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
      // User is scrolling down -> hide navbar
      navbar.classList.add("hidden");
    } else {
      // User is scrolling up -> show navbar
      navbar.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
  });


   // Select all sections
  const sections = document.querySelectorAll("section");

  // Select nav links (both navbar and footer)
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