// const allPopups = document.querySelectorAll(".popup");
const popupCloseBtns = Array.from(
  document.querySelectorAll(".popup__close-btn")
);
const openPopupBtns = document.querySelectorAll(".app__header-btn");
const enterCodeBtn = document.querySelector(".popup__form-btn--enter-code");

openPopupBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const buttonLinkedTo = e.target.dataset.attachedTo;

    const popup = document.getElementById(buttonLinkedTo);
    popup.classList.add("popup--opened");
  });
});

popupCloseBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const popup = e.target.closest(".popup");
    popup.classList.remove("popup--opened");
  });
});

enterCodeBtn.addEventListener("click", (e) => {
  const currentPopup = e.target.closest(".popup");
  currentPopup.classList.remove("popup--opened");

  const buttonLinkedTo = e.target.dataset.attachedTo;

  const nextPopup = document.getElementById(buttonLinkedTo);
  nextPopup.classList.add("popup--opened");
});
