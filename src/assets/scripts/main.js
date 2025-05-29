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
    <div class="talk-card agenda-box bg-brand-cards col-span-full md:col-span-3 xl:col-span-4">
      <p class="text-sm font-bold">${talk.time}</p>
      <p class="text-base font-semibold my-2 text-white">${talk.topic}</p>
      <p class="text-sm font-medium">${talk.speaker}</p>
      <p class="text-xs mb-2 font-light">${talk.position}</p>
      <p class="text-xs font-normal">${talk.description}</p>
    </div>
  `;
}

function renderEvent(event) {
  return `
    <div class="agenda-box bg-brand-secondary col-span-full">
      <p class="text-sm">${event.time} | ${event.title}</p>
      ${event.topic ? `<p class="font-bold  text-white">${event.topic}</p>` : ""}
      ${event.description ? `<p class="text-sm">${event.description}</p>` : ""}
    </div>
  `;
}

function renderSection(title) {
  return `<h4 class="agenda-title col-span-full">${title}</h4>`;
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
