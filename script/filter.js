function filter(id){
    var divCarousel = document.getElementById("carouselID");
    var divWeb = document.getElementById("webDiv");
    var divProg = document.getElementById("progDiv");
    var divOther = document.getElementById("otherDiv");
    var divMe = document.getElementById("MeDisplayID");
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
                    divCarousel.style.display = "none";
                    divWeb.style.display = "flex";
                    divProg.style.display = "none";
                    divOther.style.display = "none";
                }
                break;
            case "progFilter":
                divFilter = getComputedStyle(divProg, null);
                if(divFilter.getPropertyValue("display") == "none"){
                    divCarousel.style.display = "none";
                    divWeb.style.display = "none";
                    divProg.style.display = "flex";
                    divOther.style.display = "none";
                }
                break;
            case "otherFilter":
                divFilter = getComputedStyle(divOther, null);
                if(divFilter.getPropertyValue("display") == "none"){
                    divCarousel.style.display = "none";
                    divWeb.style.display = "none";
                    divProg.style.display = "none";
                    divOther.style.display = "flex";
                }
                break;
            }
    }
}