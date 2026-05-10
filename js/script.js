//Call the function //
const loadBtn = document.getElementById("loadBtn");

if(loadBtn) {
    loadBtn.addEventListener("click", loadData)
}

// mobileToggle and mobileNav

const toggleBtn = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');

if(toggleBtn && mobileNav){
toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});
}
// Contact page:
// FORM VALIDATION
//prevents submission if invalid

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        let isValid = true;

        //Clear old errors
        document.querySelectorAll(".error-message").forEach(el => {
            el.textContent = "";
        });

        const firstName = document.getElementById("firstname");
        const lastName = document.getElementById("lastname");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        //First name

        if (firstName.value.trim() === "") {
            showError(firstName, "First name is required");
            isValid = false;
        }
        // Last Name
        if (lastName.value.trim() === "") {
            showError(lastName, "Last name is required");
            isValid = false;
        }
        // Email
        if(!email.value.includes("@")) {
            showError(email, "Enter a valid email");
            isValid = false;
        }
        // Message
        if (message.value.trim().length < 10) {
            showError(message, "Message must be at least 10 characters");
            isValid = false;
        }
        //STOP
        if (!isValid) {
            e.preventDefault();
        }
    });
}
    function showError(input, message) {
        const errorSpan = input.parentElement.querySelector(".error-message");
        if (errorSpan) {
            errorSpan.textContent = message;
        }
    }
        // Character counter interaction
        const messageField = document.getElementById("message");
        const charCount =document.getElementById("charCount");

        if (messageField && charCount) {
            messageField.addEventListener("input", () => {
                charCount.textContent = `${messageField.value.length} / 200 characters`;
            });
        }

//contact page:
//FAQ accordion interaction

document.querySelectorAll(".faq-question").forEach(btn =>{
    btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("open");
    });
});


//============================
// TAB SWITCHER
// lets users control content
//=============================
const tabs= document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
 tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
 });
});

//==============================
//VIDEO CONTROL
//adds custom interaction
//=============================
const video = document.getElementById("reviewVideo");
const videoToggleBtn = document.getElementById("videoToggle");

if (video && videoToggleBtn) {
    videoToggleBtn.addEventListener("click", () => {
        video.paused ? video.play() : video.pause();
    });
}

//================================
//TRANSCRIPT TOGGLE
// accessibility requirement
//================================
const transcriptBtn = document.getElementById("toggleTranscript");
const transcript = document.getElementById("transcript");

if (transcriptBtn) {
    transcriptBtn.addEventListener("click", () => {

        const isHidden = transcript.hasAttribute("hidden");

        if (isHidden) {
            transcript.removeAttribute("hidden");
            transcriptBtn.textContent = "Hide Transcript";
        } else {
            transcript.setAttribute("hidden", "");
            transcriptBtn.textContent = "Show Transcript";
        }
    });
}

//==================================
//SCROLL ANIMATION
// add emotional engagement
//==================================
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});
faders.forEach(el => observer.observe(el));

//===========================
//REDUCED MOTION SUPPORT
//===========================
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("*").forEach(el => {
        el.style.animation = "none";
        el.style.transition = "none";
    });
}
// AI ASSISTANCE:
//Tool: ChatGPT
//Date: 5/4/2026
//Where: CAROUSEL 
//Fixed a broken syntax error

//================================
//CAROUSEL FUNCTIONALITY
//===============================
document.addEventListener("DOMContentLoaded", () => {

const track = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const slides = document.querySelectorAll("#carouselTrack .slide");

// STOP HERE if elements don't exist
if (!track || !nextBtn || !prevBtn || slides.length === 0) {
  console.warn("Carousel not loaded on this page");
  return;
}

let currentIndex = 0;

// Move carousel
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

// Prev button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});

});

// =========================
// DARK MODE TOGGLE
// =========================

const darkToggle = document.getElementById("darkToggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // save preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // load saved theme
  window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  });
}