const selectors = {
  popupElement: "[data-js-popup]",
  popupCloseButtonElement: "[data-js-popup-close-button]",
  popupOpenButtonElement: "[data-js-popup-open-button]",
  popupEnterCodeButtonElement: "[data-popup-enter-code-btn]",
};

const stateClasses = {
  isOpen: "is-open",
};

const onOpenPopupHandler = function (event) {
  const { attachedTo } = event.target.dataset;
  const popup = document.getElementById(attachedTo);

  popup.classList.add(stateClasses.isOpen);
};

export const onClosePopupHandler = function (event) {
  const popup = event.target.closest(selectors.popupElement);

  popup.classList.remove(stateClasses.isOpen);
};

const onEnterCodePopupHandler = function (event) {
  const currentPopup = event.target.closest(selectors.popupElement);
  const { attachedTo } = event.target.dataset;
  const nextPopup = document.getElementById(attachedTo);

  currentPopup.classList.remove(stateClasses.isOpen);

  nextPopup.classList.add(stateClasses.isOpen);
};

document.addEventListener("click", (event) => {
  const { target } = event;

  switch (true) {
    case target.matches(selectors.popupOpenButtonElement): {
      onOpenPopupHandler(event);
      break;
    }

    case target.matches(selectors.popupCloseButtonElement): {
      onClosePopupHandler(event);
      break;
    }

    case target.matches(selectors.popupEnterCodeButtonElement): {
      onEnterCodePopupHandler(event);
      break;
    }

    default:
      break;
  }
});
