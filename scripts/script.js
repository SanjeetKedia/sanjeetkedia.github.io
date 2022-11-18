// Changing Slides
const projectSec = document.querySelector("#projects");
const leftSlide = projectSec.querySelector("span.left-arrow");
const rightSide = projectSec.querySelector("span.right-arrow");
const featuredCardsArr = [
  ...document.querySelectorAll(".featured-project-card"),
];
const middleSlide = Math.floor(featuredCardsArr.length * 0.5);
console.log(middleSlide);
let currentSlide = middleSlide;

function moveSlide(num) {
  currentSlide += num;
  const featuredProjectsArr = [
    ...document.querySelectorAll(".featured-project-card"),
  ];
  const featuredProjectsContainer = projectSec.querySelector(
    ".featured-project-cards"
  );

  if (currentSlide >= featuredProjectsArr.length) currentSlide = 0;
  else if (currentSlide < 0) currentSlide = featuredProjectsArr.length - 1;

  const slice = featuredProjectsArr.map((x) => x).splice(currentSlide, 1)[0];
  featuredProjectsContainer.removeChild(slice);

  if (num == -1) featuredProjectsContainer.appendChild(slice);
  else if (num == 1) featuredProjectsContainer.prepend(slice);
  currentSlide = middleSlide;

  const newProjectsArr = [
    ...document.querySelectorAll(".featured-project-card"),
  ];
  newProjectsArr.map((node) => node.classList.remove("active"));
  newProjectsArr[currentSlide].classList.add("active");
}

leftSlide.addEventListener("click", () => {
  moveSlide(-1);
});

rightSide.addEventListener("click", () => {
  moveSlide(1);
});
