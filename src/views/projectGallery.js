
const svgIcons = {
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  external: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="M21 3 9 15"/><path d="M15 3h6v6"/></svg>`
};

const projects = [
  {
    title: "BattleShip",
    image: "./assets/battleshipPhoto.png",
    alt: "Screenshot of the BattleShip game project",
    github: "https://github.com/jman23444/BattleShipGame",
    live: "https://jman23444.github.io/BattleShipGame/"
  },
  {
    title: "Etch Sketch",
    image: "./assets/etchSketchPhoto.png",
    alt: "Screenshot of the Etch Sketch game project",
    github: "https://github.com/jman23444/Etch-a-Sketch",
    live: "https://jman23444.github.io/Etch-a-Sketch/"
  },
  {
    title: "To-Do App",
    image: "./assets/toDoListPhoto.png",
    alt: "Screenshot of the To-Do Tracker project",
    github: "https://github.com/jman23444/ToDoListApp",
    live: "https://jman23444.github.io/ToDoListApp/"
  },
  {
    title: "Weather App",
    image: "./assets/weatherAppImage.png",
    alt: "Screenshot of the Weather App project",
    github: "https://github.com/jman23444/weatherApp",
    live: "https://jman23444.github.io/weatherApp/"
  },
  {
    title: "Calculator",
    image: "./assets/calculatorProject.png",
    alt: "Screenshot of the Calculator project",
    github: "https://github.com/jman23444/calculatorProject",
    live: "https://jman23444.github.io/calculatorProject/"
  },
  {
    title: "Tic-Tac-Toe",
    image: "./assets/ticTacToePhoto.png",
    alt: "Screenshot of the Tic-Tac-Toe game project",
    github: "https://github.com/jman23444/ticTacToe",
    live: "https://jman23444.github.io/ticTacToe/"
  }
];

export function createProjectGallery() {
  const section = document.createElement("section");
  section.id = "project-gallery";

  const heading = document.createElement("h2");
  heading.textContent = "My Work";
  section.appendChild(heading);

  const gallery = document.createElement("div");
  gallery.id = "gallery";

  projects.forEach(({ title, image, alt, github, live }) => {
    const article = document.createElement("article");
    article.className = "project-card";
    article.setAttribute("aria-label", `Project: ${title}`);

    const figure = document.createElement("figure");
    figure.className = "project-image";

    const img = document.createElement("img");
    img.src = image;
    img.alt = alt;

    const caption = document.createElement("figcaption");
    caption.textContent = title;

    figure.appendChild(img);
    figure.appendChild(caption);

    const textSection = document.createElement("section");
    textSection.className = "project-text";

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");
    p.textContent = "This is a short description of the project that will display here.";

    const nav = document.createElement("nav");
    nav.className = "project-links";
    nav.setAttribute("aria-label", "External links");

    const githubLink = document.createElement("a");
    githubLink.href = github;
    githubLink.target = "_blank";
    githubLink.rel = "noopener";
    githubLink.setAttribute("aria-label", "View source code on GitHub");
    githubLink.innerHTML = svgIcons.github;

    const liveLink = document.createElement("a");
    liveLink.href = live;
    liveLink.target = "_blank";
    liveLink.rel = "noopener";
    liveLink.setAttribute("aria-label", "Visit live project");
    liveLink.innerHTML = svgIcons.external;

    nav.appendChild(githubLink);
    nav.appendChild(liveLink);

    textSection.appendChild(h3);
    textSection.appendChild(p);
    textSection.appendChild(nav);

    article.appendChild(figure);
    article.appendChild(textSection);
    gallery.appendChild(article);
  });

  section.appendChild(gallery);
  return section;
}
