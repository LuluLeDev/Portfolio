function showDiv(){
    var divMe = document.getElementById("MeDisplayID");
    var divCarousel = document.getElementsByClassName("Carousel");
    var divWeb = document.getElementById("webDiv");
    var divProg = document.getElementById("progDiv");
    var divOther = document.getElementById("otherDiv");
    var divShow = getComputedStyle(divMe, null);
    var divToShow;
    var tabDiv = [divWeb,divProg,divOther];

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
    

    // tabDiv.forEach(function(item){
    //   console.log(item);
    //   divShow = getComputedStyle(item, null);
    //   if(divShow.getPropertyValue("display") == "flex"){
    //     item.style.visibility = "hidden";
    //     divMe.style.display = "flex";
    //   }
    //   else{
    //     item.style.visibility = "flex";
    //     divMe.style.visibility = "hidden";
    //   }
    // });
}