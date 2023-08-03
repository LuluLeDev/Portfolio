function filter(id){
    var divCarousel = document.getElementById("carouselID");
    var divWeb = document.getElementById("webDiv");
    var divProg = document.getElementById("progDiv");
    var divOther = document.getElementById("otherDiv");
    var divMe = document.getElementById("MeDisplayID");

    var burgerMenu = document.getElementById("burgerMenu");
    var burgerMenuOn = getComputedStyle(burgerMenu, null);
    var name = document.getElementById("nameTitle");
    var burgerLine1 = document.getElementById("line1");
    var burgerLine2 = document.getElementById("line2");
    var burgerLine3 = document.getElementById("line3");

    var divMeShow = getComputedStyle(divMe, null);
    if(divMeShow.getPropertyValue("display") == "none"){
        var divFilter;
        switch(id){
            case "discoverFilter":
                divFilter = getComputedStyle(divCarousel, null);
                if(divFilter.getPropertyValue("display") == "none"){
                    divCarousel.style.display = "flex";
                    divWeb.style.display = "none";
                    divProg.style.display = "none";
                    divOther.style.display = "none";
                }
                break;
            case "webFilter":
                divFilter = getComputedStyle(divWeb, null);
                if(divFilter.getPropertyValue("display") == "none"){
                    if(screen.width > 700){
                        divCarousel.style.display = "none";
                        divWeb.style.display = "flex";
                        divProg.style.display = "none";
                        divOther.style.display = "none";
                    }
                    else{
                        divCarousel.style.display = "none";
                        divWeb.style.display = "inline-block";
                        divProg.style.display = "none";
                        divOther.style.display = "none";
                    }
                }
                break;
            case "progFilter":
                divFilter = getComputedStyle(divProg, null);
                if(divFilter.getPropertyValue("display") == "none"){
                    if(screen.width > 700){
                        divCarousel.style.display = "none";
                        divWeb.style.display = "none";
                        divProg.style.display = "flex";
                        divOther.style.display = "none";
                    }
                    else{
                        divCarousel.style.display = "none";
                        divWeb.style.display = "none";
                        divProg.style.display = "inline-block";
                        divOther.style.display = "none";
                    }
                }
                break;
            case "otherFilter":
                divFilter = getComputedStyle(divOther, null);
                if(divFilter.getPropertyValue("display") == "none"){
                    if(screen.width > 700){
                        divCarousel.style.display = "none";
                        divWeb.style.display = "none";
                        divProg.style.display = "none";
                        divOther.style.display = "flex";
                    }
                    else {
                        divCarousel.style.display = "none";
                        divWeb.style.display = "none";
                        divProg.style.display = "none";
                        divOther.style.display = "inline-block";
                    }
                }
                break;
            }
            if(burgerMenuOn.getPropertyValue("display") == "flex"){
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
}