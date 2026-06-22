const splash = document.getElementById("splash");
const site = document.getElementById("site");
const getStartedBtn = document.getElementById("getStartedBtn");
const typingText = document.getElementById("typingText");
const sections = document.querySelectorAll(".section, .reveal-section");
const skillBoxes = document.querySelectorAll(".skill-box");

document.body.style.overflow = "hidden";

const introText =
  "I design and build clean, scalable, and user-focused digital experiences.";

let index = 0;

function typeIntro() {
  if (!typingText) return;

  if (index < introText.length) {
    typingText.textContent += introText.charAt(index);
    index++;
    setTimeout(typeIntro, 38);
  }
}

window.addEventListener("load", () => {
  setTimeout(typeIntro, 900);
});

if (getStartedBtn) {
  getStartedBtn.addEventListener("click", () => {
    splash.classList.add("hide");
    site.classList.add("show");
    document.body.style.overflow = "auto";

    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      setTimeout(() => {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 250);
    }
  });
}

function revealOnScroll() {
  const trigger = window.innerHeight * 0.82;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    const isVisible = rect.top < trigger && rect.bottom > 120;

    if (isVisible) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

skillBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    const isAlreadyFull = box.classList.contains("full");

    skillBoxes.forEach((item) => {
      item.classList.remove("active");
      item.classList.remove("full");
    });

    if (!isAlreadyFull) {
      box.classList.add("active");
      box.classList.add("full");
    }
  });
});

const interactiveCards = document.querySelectorAll(
  ".highlight-card, .skill-box, .project-single-card"
);

interactiveCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -4;
    const rotateY = (x / rect.width - 0.5) * 4;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});