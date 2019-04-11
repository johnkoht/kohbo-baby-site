//= require jquery-3.4.0.min
//= require turn
//= require_self

var windowWidth;
var windowHeight;

var bookContainer     = $('#book');
var horizontalPadding = 10;
var verticalPadding  = 10;

setWindowHeight();
setWindowWidth();

bookContainer.turn({
  width: windowWidth,
  height: windowHeight,
  autoCenter: true,
  acceleration: true,
  gradients: true
});

$(window).on('resize', function() {
  resize();
})

function resize() {
  setWindowHeight();
  setWindowWidth();
  bookContainer.turn('size', windowWidth, windowHeight);
  bookContainer.turn('resize');
}

function setWindowHeight() {
  windowHeight = $(window).height() - (verticalPadding * 2);
}

function setWindowWidth() {
  windowWidth = $(window).width() - (horizontalPadding * 2);
}


$("#next-page").on('click', function(e) {
  bookContainer.turn("next");
});

$("#prev-page").on('click', function(e) {
  bookContainer.turn("previous");
});
