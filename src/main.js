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
  initHeroSlider();
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

function initHeroSlider() {
  const heroSlides = document.querySelectorAll(".hero-slide");
  const heroPrev = document.getElementById("heroPrev");
  const heroNext = document.getElementById("heroNext");

  const heroTitleOne = document.getElementById("heroTitleOne");
  const heroTitleTwo = document.getElementById("heroTitleTwo");
  const heroTitleThree = document.getElementById("heroTitleThree");
  const heroSlogan = document.getElementById("heroSlogan");
  const heroTags = document.getElementById("heroTags");

  if (!heroSlides.length) return;

  const heroContent = [
    {
      titleOne: "Your Pathway",
      titleTwo: "to World-Class",
      titleThree: "Australian Education.",
      slogan: "Grow. Study. Succeed.",
      tags: [
        "Edu loan assistance",
        "English test preparation",
        "Personalised counselling",
        "Application processing",
        "Scholarship options",
        "Visa guidance",
      ],
    },
    {
      titleOne: "Study Smart",
      titleTwo: "Build Your Future",
      titleThree: "in Australia.",
      slogan: "Grow. Study. Succeed.",
      tags: [
        "University selection",
        "Course counselling",
        "Admission support",
        "Document preparation",
        "SOP guidance",
        "Career planning",
      ],
    },
    {
      titleOne: "Start Strong",
      titleTwo: "With Trusted",
      titleThree: "Study Guidance.",
      slogan: "Grow. Study. Succeed.",
      tags: [
        "Visa guidance",
        "Scholarship options",
        "Pre-departure briefing",
        "Application processing",
        "Student support",
        "Australia counselling",
      ],
    },
  ];

  let heroIndex = 0;
  let heroTimer;

  function renderTags(tags) {
    heroTags.innerHTML = tags
      .map(
        (tag) => `
          <span class="font-['Oswald'] bg-[#70264a]/95 text-white px-2 py-[2px] text-[16px] sm:text-[21px] font-semibold leading-tight">
            ${tag}
          </span>
        `,
      )
      .join("");
  }

  function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle("opacity-100", i === index);
      slide.classList.toggle("opacity-0", i !== index);
    });

    heroTitleOne.textContent = heroContent[index].titleOne;
    heroTitleTwo.textContent = heroContent[index].titleTwo;
    heroTitleThree.textContent = heroContent[index].titleThree;
    heroSlogan.textContent = heroContent[index].slogan;
    renderTags(heroContent[index].tags);
  }

  function nextSlide() {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(heroIndex);
  }

  function prevSlide() {
    heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
    showHeroSlide(heroIndex);
  }

  function startHeroSlider() {
    heroTimer = setInterval(nextSlide, 4000);
  }

  function resetHeroSlider() {
    clearInterval(heroTimer);
    startHeroSlider();
  }

  if (heroNext) {
    heroNext.addEventListener("click", () => {
      nextSlide();
      resetHeroSlider();
    });
  }

  if (heroPrev) {
    heroPrev.addEventListener("click", () => {
      prevSlide();
      resetHeroSlider();
    });
  }

  showHeroSlide(heroIndex);
  startHeroSlider();
}

loadComponents();
