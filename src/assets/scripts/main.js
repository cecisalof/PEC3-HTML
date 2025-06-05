/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import agenda from "../../data/agenda.json";

// Add event listener to active link on desktop navbar & footer
const links = document.querySelectorAll('.nav-link');
const currentUrl = window.location.pathname.replace(/\/$/, '');
;
console.log(`Current URL: ${currentUrl}`);


links.forEach(link => {
  if (link.getAttribute('href').replace(/\/$/, '') === currentUrl) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});


function renderTalk(talk) {
  return `
<div class="talk-card agenda-box bg-brand-cards col-span-full md:col-span-3 xl:col-span-4">
  <p class="text-sm md:text-base font-bold uppercase">${talk.time}</p>
  <p class="text-base md:text-lg font-semibold my-2 text-white font-serif">${talk.topic}</p>
  <p class="text-sm md:text-base font-semibold">${talk.speaker}</p>
  <p class="text-xs md:text-sm mb-2 font-light">${talk.position}</p>
  <p class="text-xs md:text-sm font-normal my-4">${talk.description}</p>
</div>
  `;
}

function renderEvent(event) {
  return `
    <div class="agenda-box bg-brand-secondary col-span-full xl-plus:text-center">
      <p class="text-sm md:text-base">${event.time} | ${event.title}</p>
      ${event.topic ? `<p class="font-bold my-2  text-white text-base md:text-lg font-serif">${event.topic}</p>` : ""}
      ${event.description ? `<p class="my-2 text-xs md:text-sm">${event.description}</p>` : ""}
    </div>
  `;
}

function renderSection(title) {
  return `<h4 class="agenda-title col-span-full xl-plus:hidden">${title}</h4>`;
}


document.addEventListener("DOMContentLoaded", () => {
  const agendaContainer = document.getElementById("agenda");
  if (!agendaContainer) return;

  agenda.forEach(item => {
    let html = "";

    if (item.type === "talk") html = renderTalk(item);
    if (item.type === "event") html = renderEvent(item);
    if (item.type === "section") html = renderSection(item.title);

    agendaContainer.insertAdjacentHTML("beforeend", html);
  });
});

// Add event listener to change navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar= document.getElementById("navbar");
  const header = document.querySelector('header');

  // Detecta si el header es visible (no oculto por Tailwind)
  const headerVisible = header && header.offsetHeight > 0;

  // Usa la altura real del header si es visible, o un fallback
  const headerHeight = headerVisible ? header.offsetHeight : 100;

  // Función que aplica clases según scroll
  const handleNavbar = (navbar) => {
    if (!navbar) return;

    if (window.scrollY > headerHeight) {
      navbar.classList.add("nav-solid");
      navbar.classList.remove("nav-transparent");
    } else {
      navbar.classList.add("nav-transparent");
      navbar.classList.remove("nav-solid");
    }
  };

  handleNavbar(navbar);
  // handleNavbar(navbarXL);

});
