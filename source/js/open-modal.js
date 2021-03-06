var openButton = document.querySelectorAll(".js-open-order");
var modal = document.querySelector(".modal");

Array.prototype.forEach.call(openButton, function(button) {
  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal--open");
  }, true);
});

modal.querySelector(".js-modal-form").addEventListener("submit", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal--open");
});
