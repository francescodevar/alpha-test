async function loadSection(el) {
  const file = el.getAttribute("data-include");
  const resp = await fetch(file);
  el.innerHTML = await resp.text();
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

async function loadAllSections() {
  const sections = document.querySelectorAll("[data-include]");
  await Promise.all(Array.from(sections).map(loadSection));

  await new Promise(resolve => setTimeout(resolve, 200));

  const navbarDiv = document.querySelector('[data-include*="navbar"]');
  if (navbarDiv) navbarDiv.removeAttribute('hidden');

  document.body.classList.remove("preload");

  await Promise.all([
    loadScript("src/components/navbar/navbar.js"),
    loadScript("src/sections/hero/hero-section.js"),
    loadScript("src/sections/faq/faq-section.js")
  ]);

  AOS.init({ once: true });
}

loadAllSections();