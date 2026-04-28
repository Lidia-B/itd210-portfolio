//Load from API//
async function loadData() {

    const loadingMessage = document.getElementById("loadingMessage");
    const errorMessage = document.getElementById("errorMessage");
    const dataContainer = document.getElementById("dataContainer");
    
    // Show Loading//
    loadingMessage.style.display = "block";
    errorMessage.textContent = "";
    dataContainer.innerHTML = "";

    try {
        //Fetch Products//
        const response = await fetch("https://dummyjson.com/products?limit=6");

        //Check for errors//
        if (!response.ok) {
            throw new Error("Failed to fetch data.");
        }
        //convert to JSON//
        const data = await response.json();

        //loop through products//
        data.products.forEach(product => {
        const item = document.createElement("article");
        item.classList.add("card");

        //image
        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = product.title;

        //title
        const title = document.createElement("h3");
        title.textContent = product.title;

        //description
        const desc = document.createElement("p");
        desc.textContent = product.description;
        
        //price
        const price = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = `$${product.price}`;
        price.appendChild(strong);

        item.appendChild(img);
        item.appendChild(title);
        item.appendChild(desc);
        item.appendChild(price);
        
        dataContainer.appendChild(item);
      });

        
    } catch (error){
        errorMessage.textContent = "Something went wrong. Please try again";
        console.error(error);
    } finally{
        loadingMessage.style.display = "none";
    }
}
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
// Confirmation Message

/*Prevents page reload and shows a confirmation */

const contactForm = document.querySelector('.contact-form');

if(contactForm){
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
    alert("Thanks! We'll get back to you soon.");
});
}

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
document.addEventListener("DOMContentLoaded", () => {
//================================
//CAROUSEL FUNCTIONALITY
//===============================
const track = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (!track || !nextBtn || !prevBtn) {
  console.warn("Carousel elements missing:", {
    track,
    nextBtn,
    prevBtn
  });
}

const slides = document.querySelectorAll("#carouselTrack .slide");
 
if (slides.length === 0){
    console.warn("No slides found inside carouselTrack");
}
let currentIndex = 0;

//Move carousel
function updateCarousel(){
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
 // Next Button
 // Moves carousel forward
 nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
 });

 //Previous Button
 //moves carousel backwards
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
 });

 //===========================
 //KEYBOARD ACCESSIBILITY
 //allows navigation using keyboard
 //===========================
 if (track && nextBtn && prevBtn){
 document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
 });
 }
});