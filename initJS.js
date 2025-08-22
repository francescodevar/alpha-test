async function loadSection(el) {
  const file = el.getAttribute("data-include");
  const resp = await fetch(file);
  el.innerHTML = await resp.text();
}

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
}

async function loadAllSections() {
  const sections = document.querySelectorAll("[data-include]");
  await Promise.all(Array.from(sections).map(loadSection));
  document.body.classList.remove("preload");
  loadScript("src/components/navbar/navbar.js");
  loadScript("src/sections/hero/hero-section.js");
  loadScript("src/sections/faq/faq-section.js");
  AOS.init({ once: true });
}

loadAllSections();