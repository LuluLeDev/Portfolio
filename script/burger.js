$(document).ready(function () {
  //Menu button on click event
  $("#burgerButton").on("click", function () {
    // Toggles a class on the menu button to transform the burger menu into a cross
    $(".burgerLine:nth-of-type(1)").toggleClass(
      "burgerLine--1"
    );
    $(".burgerLine:nth-of-type(2)").toggleClass(
      "burgerLine--2"
    );
    $(".burgerLine:nth-of-type(3)").toggleClass(
      "burgerLine--3"
    );

    // Toggles a class that slides the menu into view on the screen
    $("#burgerMenu").toggleClass("burgerMenu--open");
    return false;
  });
});

function showBurgerMenu(){
  
}