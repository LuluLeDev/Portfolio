function showDiv(){
    var divMe = document.getElementById("MeDisplayID");
    var divCarousel = document.getElementsByClassName("Carousel");
    var divProp = getComputedStyle(divMe, null);
    if(divProp.getPropertyValue("display") == "none"){
       divMe.style.display = "flex";
       divCarousel[0].style.visibility = "hidden";
    } else {
      divMe.style.display = "none";
      divCarousel[0].style.visibility = "visible";
    }
}