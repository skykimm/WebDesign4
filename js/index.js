var slides = document.querySelector(".slidebox");
var count = 0;
var openmodal = document.querySelector(".closemodal");

function slide(){
    if(count==2){
        count=0;
    }
    else{
        count++;
    }
    
    slides.style.top = 300*(-count)+"px";
}

window.setInterval("slide()",2000);


function clickopen(){
    openmodal.style.display="block";
}
function clickclose(){
    openmodal.style.display="none";
}
openmodal.addEventListener("click",clickopen);
openmodal.addEventListener("click",clickclose);