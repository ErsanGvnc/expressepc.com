// ==================== SLIDER FUNCTIONALITY ====================
let currentSlideIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides[currentSlideIndex].classList.remove("active");
  dots[currentSlideIndex].classList.remove("active");

  currentSlideIndex += direction;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
}

function currentSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides[currentSlideIndex].classList.remove("active");
  dots[currentSlideIndex].classList.remove("active");

  currentSlideIndex = index;

  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
}

// Auto-advance slider every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

// ==================== LANGUAGE SWITCHER ====================
function switchLanguage(lang) {
  document.documentElement.setAttribute("data-lang", lang);
  localStorage.setItem("preferredLanguage", lang);

  // Update HTML lang attribute for SEO
  document.documentElement.lang = lang;

  // Close mobile menu if open
  const mobileNav = document.getElementById("main-nav");
  if (mobileNav && mobileNav.classList.contains("active")) {
    toggleMobileMenu();
  }
}

// Load saved language preference on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "en";
  switchLanguage(savedLang);
});

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
  const nav = document.getElementById("main-nav");
  const menuIcon = document.querySelector(".mobile-menu-icon i");

  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("active");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
    document.body.style.overflow = "hidden";
  }
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const nav = document.getElementById("main-nav");
  const menuIcon = document.querySelector(".mobile-menu-icon");

  if (
    nav &&
    nav.classList.contains("active") &&
    !nav.contains(e.target) &&
    !menuIcon.contains(e.target)
  ) {
    toggleMobileMenu();
  }
});

// Handle dropdown toggle in mobile
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a");

    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        dropdown.classList.toggle("open");

        // Close other dropdowns
        dropdowns.forEach((other) => {
          if (other !== dropdown) {
            other.classList.remove("open");
          }
        });
      }
    });
  });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href !== "#!") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// ==================== HEADER SCROLL EFFECT ====================
let lastScroll = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";
  }

  lastScroll = currentScroll;
});

// ==================== FORM HANDLING ====================
async function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  // Dil kontrolü
  const isEn = document.documentElement.getAttribute("data-lang") === "en";

  // Butonun durumunu değiştir (Gönderiliyor mesajı)
  const btn = form.querySelector(
    'button[type="submit"]:not([style*="display: none"])',
  );
  const originalText = btn.innerText;
  btn.innerText = isEn ? "Sending..." : "Gönderiliyor...";
  btn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    if (response.status === 200) {
      alert(
        isEn
          ? "Thank you! Your message has been sent."
          : "Teşekkürler! Mesajınız başarıyla gönderildi.",
      );
      form.reset();
    } else {
      console.log(result);
      alert(
        isEn
          ? "Something went wrong. Please try again."
          : "Bir şeyler yanlış gitti. Lütfen tekrar deneyin.",
      );
    }
  } catch (error) {
    console.log(error);
    alert(isEn ? "Connection error!" : "Bağlantı hatası!");
  } finally {
    // Butonu eski haline getir
    btn.innerText = originalText;
    btn.disabled = false;
  }
}

// ==================== LAZY LOADING IMAGES ====================
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
});

// ==================== UTILITIES ====================
// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  }
});

// Prevent mega menu links from navigating in mobile
if (window.innerWidth <= 991) {
  document.querySelectorAll(".dropdown > a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
}
