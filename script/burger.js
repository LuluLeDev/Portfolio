function showBurgerMenu(){
  var burgerMenu = document.getElementById("burgerMenu");
  var menuShow = getComputedStyle(burgerMenu, null);
  var burgerLine1 = document.getElementById("line1");
  var burgerLine2 = document.getElementById("line2");
  var burgerLine3 = document.getElementById("line3");
  var name = document.getElementById("nameTitle");

  if(menuShow.getPropertyValue("display") == "none"){
    burgerMenu.style.display = "flex";
    name.style.display = "none";

    burgerLine1.style.transform = "rotate(45deg)";
    burgerLine1.style.top = "13px";
    burgerLine1.style.position = "absolute";
    
    burgerLine2.style.display = "none";

    burgerLine3.style.transform = "rotate(135deg)";
    burgerLine3.style.top = "13px";
    burgerLine3.style.position = "absolute";
  }
  else{
    burgerMenu.style.display = "none";
    name.style.display = "flex";

    burgerLine1.style.transform = "rotate(180deg)";
    burgerLine1.style.top = "13px";
    burgerLine1.style.position = "static";

    burgerLine2.style.display = "block";
    
    burgerLine3.style.transform = "rotate(180deg)";
    burgerLine3.style.top = "13px";
    burgerLine3.style.position = "static";
  }
}