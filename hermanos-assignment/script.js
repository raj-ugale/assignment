console.log("FAQ JS loaded");


// Fade loader and show page
window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");
    const content = document.querySelector(".page-content");

    setTimeout(() => {
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.display = "none";
        content.style.opacity = "1";
      }, 400);
    }, 600);
});



const select = document.getElementById("countrySelect");

function updateFlag() {
  const flagUrl = select.selectedOptions[0].getAttribute("data-flag");
  select.style.backgroundImage = `url(${flagUrl})`;
}

updateFlag();  // default on load
select.addEventListener("change", updateFlag);


const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
});


// AA NAVBAR mobile toggle (self-contained)
(function(){
  const hamburger = document.getElementById('aa-hamburger');
  const navlinks = document.getElementById('aa-navlinks');
  const searchWrap = document.querySelector('.aa-search-wrap');

  if(!hamburger || !navlinks) return;

  function toggleMenu(){
    const open = navlinks.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');

    // show search row under nav when menu open on smaller screens
    if(searchWrap){
      if(open) searchWrap.classList.add('mobile-show'); else searchWrap.classList.remove('mobile-show');
    }
  }

  hamburger.addEventListener('click', function(e){
    e.stopPropagation();
    toggleMenu();
  });

  // close menu when tapping outside
  document.addEventListener('click', function(e){
    if(!navlinks.classList.contains('show')) return;
    if(!navlinks.contains(e.target) && !hamburger.contains(e.target)){
      navlinks.classList.remove('show');
      hamburger.setAttribute('aria-expanded','false');
      if(searchWrap) searchWrap.classList.remove('mobile-show');
    }
  });

  // close on Escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && navlinks.classList.contains('show')){
      navlinks.classList.remove('show');
      hamburger.setAttribute('aria-expanded','false');
      if(searchWrap) searchWrap.classList.remove('mobile-show');
    }
  });

})();



const tabs = document.querySelectorAll(".aa-tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".aa-tab.active")?.classList.remove("active");
    tab.classList.add("active");
  });
});


document.getElementById('phone').addEventListener('input', function (e) {
  this.value = this.value.replace(/\D/g, ''); // Remove all non-digit characters
});
const helpForm = document.getElementById("helpForm");
// Allow only digits in the phone input


document.addEventListener("DOMContentLoaded", function () {
  const helpForm = document.getElementById("helpForm");

  if (!helpForm) return;

  helpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    helpForm.reset();
    alert("Enquiry submitted successfully!");
  });
});


document.querySelectorAll(".aa-faq-item").forEach(item => {
  const question = item.querySelector(".aa-faq-question");
  const icon = item.querySelector(".aa-icon");

  if (!question || !icon) return; // 🔒 prevents crash

  question.addEventListener("click", () => {
    item.classList.toggle("active");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});
