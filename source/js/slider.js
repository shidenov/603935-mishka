var slideButtons = document.querySelectorAll(".reviews__button");
var slideIndex = 1;

Array.prototype.forEach.call(slideButtons, function(slideButton) {
  slideButton.addEventListener("click", function(evt) {
    var currentButton = evt.currentTarget;
    if (currentButton.classList.contains("reviews__next")) {
      plusDivs(1);
    } else {
      plusDivs(-1);
    }
  });
});

function plusDivs(n) {
  slideIndex += n
  showDivs(slideIndex);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("reviews__item");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("reviews__item--active");
  }
  x[slideIndex-1].classList.add("reviews__item--active");
}
