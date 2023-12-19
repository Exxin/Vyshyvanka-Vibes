/**(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-mobile-open]'),
    closeModalBtn: document.querySelector('[data-modal-mobile-close]'),
    modal: document.querySelector('[data-modal-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open-mob');
  }
})();
**/
function openModal() {
    // Показати модальне вікно та затемнення заднього плану
    document.getElementById("mobile-menu").style.display = "block";
    document.getElementById("overlay").style.visibility = "visible";
}

function closeModal() {
    // Сховати модальне вікно та затемнення заднього плану
    document.getElementById("mobile-menu").style.display = "none";
    document.getElementById("overlay").style.visibility = "hidden";
}
