import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const hotClasses = document.querySelectorAll(".hot");
  hotClasses.forEach((emoji) => {
    emoji.innerHTML += String.fromCodePoint(0x1f525);
  });
});
