const popupBtn = document.querySelector(".popup__btn");
const popupClose = document.querySelector(".popup__close");
const popupOpen = document.querySelectorAll(".popup__open");
const popupSection = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");
console.log(popupOpen);

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
