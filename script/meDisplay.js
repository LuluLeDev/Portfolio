function showDiv(){
    var divMe = document.getElementById("MeDisplayID");
    var divCarousel = document.getElementById("carouselID");
    var divWeb = document.getElementById("webDiv");
    var divProg = document.getElementById("progDiv");
    var divOther = document.getElementById("otherDiv");
    var divShow = getComputedStyle(divMe, null);
    var divShow;
    var tabDiv = [divWeb,divProg,divOther];

    divToShow = getComputedStyle(divCarousel, null);
    if(divToShow.getPropertyValue("display") == "flex"){
      if(divShow.getPropertyValue("display") == "none"){
        divMe.style.display = "flex";
        divCarousel.style.visibility = "hidden";
      } 
      else {
        divMe.style.display = "none";
        divCarousel.style.visibility = "visible";
      }
    }
    divToShow = getComputedStyle(divWeb, null);
    if(divToShow.getPropertyValue("display") == "flex"){
      if(divShow.getPropertyValue("display") == "none"){
        divMe.style.display = "flex";
        divWeb.style.visibility = "hidden";
      } 
      else {
        divMe.style.display = "none";
        divWeb.style.visibility = "visible";
      }
    }
    divToShow = getComputedStyle(divProg, null);
    if(divToShow.getPropertyValue("display") == "flex"){
      if(divShow.getPropertyValue("display") == "none"){
        divMe.style.display = "flex";
        divProg.style.visibility = "hidden";
      } 
      else {
        divMe.style.display = "none";
        divProg.style.visibility = "visible";
      }
    }
    divToShow = getComputedStyle(divOther, null);
    if(divToShow.getPropertyValue("display") == "flex"){
      if(divShow.getPropertyValue("display") == "none"){
        divMe.style.display = "flex";
        divOther.style.visibility = "hidden";
      } 
      else {
        divMe.style.display = "none";
        divOther.style.visibility = "visible";
      }
    }
}