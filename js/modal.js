const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleMedal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleMedal);

modalBtnClose.addEventListener("click", toggleMedal);
