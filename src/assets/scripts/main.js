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


function renderTalk(talk) {
  return `
<div class="talk-card agenda-box bg-brand-cards col-span-full md:col-span-3 xl:col-span-4 font-heading">
  <p class="text-sm md:text-base font-bold uppercase">${talk.time}</p>
  <p class="text-base md:text-lg font-semibold my-2 text-white">${talk.topic}</p>
  <p class="text-sm md:text-base font-semibold">${talk.speaker}</p>
  <p class="text-xs md:text-sm mb-2 font-light">${talk.position}</p>
  <p class="text-xs md:text-sm font-normal my-4">${talk.description}</p>
</div>
  `;
}

function renderEvent(event) {
  return `
    <div class="agenda-box bg-brand-secondary col-span-full">
      <p class="text-sm md:text-base">${event.time} | ${event.title}</p>
      ${event.topic ? `<p class="font-bold my-2  text-white text-base md:text-lg">${event.topic}</p>` : ""}
      ${event.description ? `<p class="my-2 text-xs md:text-sm">${event.description}</p>` : ""}
    </div>
  `;
}

function renderSection(title) {
  return `<h4 class="agenda-title col-span-full xl-plus:text-white">${title}</h4>`;
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

window.addEventListener("scroll", function () {
  const navbarMobile = document.getElementById("navbar");
  const navbarXL = document.getElementById("navbar-xl");      // para ≥ 1440px
  const header = document.querySelector('header');

  // Detecta si el header es visible (no oculto por Tailwind)
  const headerVisible = header && header.offsetHeight > 0;
  console.log(headerVisible);
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

  handleNavbar(navbarMobile);
  handleNavbar(navbarXL);

});
