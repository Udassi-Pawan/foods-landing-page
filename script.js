const animatedIcons = document.querySelectorAll(".animated");
const pull = document.querySelector(".btn-pull");
const navBar = document.querySelector("nav");
const imageDivs = document.querySelectorAll(".image-div");

let curr = 0;

animatedIcons[0].classList.add("show");
setInterval(() => {
  animatedIcons[curr].classList.remove("show");
  curr = (curr + 1) % 3;
  animatedIcons[curr].classList.add("show");
}, 2000);

pull.addEventListener("click", () => {
  navBar.classList.toggle("pull-down");
});

imageDivs.forEach((imageDiv, ind) => {
  imageDiv.addEventListener("mouseenter", () => {
    imageDiv.classList.add("active");
  });
  imageDiv.addEventListener("mouseleave", () => {
    imageDiv.classList.remove("active");
  });
});
