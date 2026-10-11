"use strict";

const comboInputTextField = document.getElementById("cntrl1");
const comboButton = document.getElementById("cb1-button");
const comboResultList = document.getElementById("results");

const comboOptions = Array.from(
  comboResultList.querySelectorAll('[role="option"]'),
);

comboOptions.forEach((option) => {
  option.addEventListener("click", () => selectOption(option));
});

let activeIndex = -1;

function setOpen(isOpen) {
  // Show or hide the results.
  comboResultList.hidden = !isOpen;
  // Update aria-expanded on the input.
  comboInputTextField.ariaExpanded = String(isOpen);
  // Toggle the button's "open" class.
  comboButton.classList.toggle("open", isOpen);

  if (!isOpen) clearActiveOption();
}

comboButton.addEventListener("click", (event) => {
  setOpen(comboResultList.hidden);
});

comboInputTextField.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    setOpen(true);

    if (activeIndex < comboOptions.length - 1) {
      setActiveOption(activeIndex + 1);
    }
  }

  if (event.key === "ArrowUp" && !comboResultList.hidden) {
    event.preventDefault();

    if (activeIndex > 0) setActiveOption(activeIndex - 1);
  }

  if (event.key === "Escape" && !comboResultList.hidden) {
    event.preventDefault();
    setOpen(false);
  }

  if (event.key === "Enter" && !comboResultList.hidden && activeIndex >= 0) {
    event.preventDefault();
    // const text = comboOptions.at(activeIndex).textContent;
    // comboInputTextField.value = text;
    selectOption(comboOptions.at(activeIndex));
    // setOpen(false);
  }
});

function setActiveOption(index) {
  activeIndex = index;
  comboOptions.forEach((option, optionIndex) => {
    option.classList.toggle("active", optionIndex === activeIndex);
    // if (optionIndex === activeIndex) {
    //   comboOptions.at(optionIndex).classList.toggle("li.active");
  });
  comboInputTextField.setAttribute(
    "aria-activedescendant",
    comboOptions[activeIndex].id,
  );
  console.log(comboInputTextField.getAttribute("aria-activedescendant"));
}

// Clear active option when "Enter" key is pressed
function clearActiveOption() {
  activeIndex = -1;
  comboOptions.forEach((option, optionIndex) => {
    option.classList.remove("active");
  });

  comboInputTextField.removeAttribute("aria-activedescendant");
}

/**
 * @param {HTMLElement} option
 */
function selectOption(option) {
  comboInputTextField.value = option.textContent;
  setOpen(false);
}
