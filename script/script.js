const popupBtn = document.querySelector(".popup__btn");
const popupClose = document.querySelector(".popup__close");
const popupOpen = document.querySelectorAll(".popup__open");
const popupSection = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");
const popup = document.querySelector(".popup");
const allLinks = document.querySelectorAll("a:link");
const checkBox = document.querySelector(".navigation__checkbox");
const navBackground = document.querySelector(".navigation__background");
const nav = document.querySelector(".navigation__nav");

popupClose.addEventListener("click", function (e) {
  popupSection.classList.add("hidden");
});
popupBtn.addEventListener("click", function (e) {
  popupSection.classList.add("hidden");
});

popupOpen.forEach(function (openBtn) {
  openBtn.addEventListener("click", function (e) {
    popupSection.classList.remove("hidden");
  });
});
