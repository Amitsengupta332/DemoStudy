import "./style.css";

async function loadComponents() {
  const components = document.querySelectorAll("[data-component]");

  for (const component of components) {
    const filePath = component.getAttribute("data-component");

    try {
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error(`Could not load: ${filePath}`);
      }

      component.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
    }
  }

  initNavbar();
}

function initNavbar() {
  const mainNavbar = document.getElementById("mainNavbar");
  const desktopMenu = document.getElementById("desktopMenu");
  const calendarBtn = document.getElementById("calendarBtn");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  function handleScrollNavbar() {
    if (!mainNavbar || !desktopMenu || !menuBtn) return;

    if (window.scrollY > 80) {
      mainNavbar.classList.remove("bg-transparent");
      mainNavbar.classList.add("bg-white", "shadow-md");

      desktopMenu.classList.remove("text-white");
      desktopMenu.classList.add("text-[#171717]");

      if (calendarBtn) {
        calendarBtn.classList.remove("text-[#25a9d6]", "hover:text-white");
        calendarBtn.classList.add("text-[#171717]", "hover:text-[#25a9d6]");
      }

      menuBtn.classList.remove("text-[#25a9d6]");
      menuBtn.classList.add("text-[#25a9d6]");
    } else {
      mainNavbar.classList.add("bg-transparent");
      mainNavbar.classList.remove("bg-white", "shadow-md");

      desktopMenu.classList.add("text-white");
      desktopMenu.classList.remove("text-[#171717]");

      if (calendarBtn) {
        calendarBtn.classList.add("text-[#25a9d6]", "hover:text-white");
        calendarBtn.classList.remove("text-[#171717]", "hover:text-[#25a9d6]");
      }

      menuBtn.classList.add("text-[#25a9d6]");
    }
  }

  handleScrollNavbar();
  window.addEventListener("scroll", handleScrollNavbar);
}

loadComponents();