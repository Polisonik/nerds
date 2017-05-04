var open = document.querySelector(".btn-contacts");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".btn-close");
var  user_name = popup.querySelector("[name=name]");
var overlay = document.querySelector(".modal-overlay");

open.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  user_name.focus();
});
close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});
overlay.addEventListener("click", function (event){
  event.preventDefault();
  if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
    }
})
