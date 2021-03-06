const loadingPage = document.querySelector('.first-loading-page');
const siteIntro = document.querySelector('.intro-page');
const logo = document.querySelector('#logo');
const logoEffect = document.querySelector('#logo path');
const enterText = document.querySelector('.t1');
const enterText2 = document.querySelector('.t2');
const finishLine = document.querySelector('.finish-line'); 



//........THE PAGE LOADS HERE.........//
let loadingEffect = () => {
    loadingPage.style.transform = "translateY(-100vh)";

    logoEffect.style.cssText = "animation: naming 5s ease-in-out 0s 1 alternate forwards;"

     enterText.style.cssText = "animation: text-enter01 1s 1 ease-in-out 3.6s forwards;";

     enterText2.style.cssText= "animation: text-enter02 1s 1 ease-in-out 4.4s forwards;";

     enterText2.addEventListener("webkitAnimationEnd", () => {
        finishLine.style.cssText = "animation: full 1s 1 ease 0s forwards;"});
       
        finishLine.addEventListener("webkitAnimationEnd", () => {
          header.style.cssText = "transform: translateY(0vh);";
          document.body.style.overflow = "unset";
        });
    } 
//setTimeout(loadingEffect, 5000);
window.addEventListener('load', loadingEffect);


///...........THE SVG PRECAUTION.........//
let logoWidth = () => {
    let screenSize = (window.innerWidth * 60)/100;
    Math.ceil(screenSize);
    logo.style.width = screenSize;
    if(screenSize++ || screenSize--){
        logo.style.width = screenSize;
    }    
}
logoWidth();



//............SIDE_NAVIGATION_GOES_HERE..............//
const navSlide = () => {
    const menuIcon = document.querySelector('.burger');
    
    menuIcon.addEventListener('click' , () =>{
        const menuList = document.querySelector('.nav-links');
        menuList.classList.toggle('nav-links-active');
         
        const menuLinks = document.querySelectorAll('.nav-links li');
        for(i = 0; i < menuLinks.length; i++){
            if(menuLinks[i].style.animation){
                menuLinks[i].style.animation = "";
            }  else {
                menuLinks[i].style.animation = `linksUp .3s 1 ease-in-out ${(i/5)}s forwards`;
            }  
        }

        const burgerStrokes = document.querySelectorAll('.burger div');
        for (i = 0; i< burgerStrokes.length; i++){
            burgerStrokes[i].classList.toggle(`line-${i+1}`);
            burgerStrokes[i].style.transition = "0.5s all ease";
        }
    });
}
navSlide();



//..............RESPONSIVE_HEADER_TO_USER_SCROLL.............//
const header = document.querySelector('.navigation');
let lastScrollPosition =  window.scrollY;

window.addEventListener('scroll' , checkScrollDirection);
function checkScrollDirection(){
    let newScrollPosition = window.scrollY;
    
    if(newScrollPosition > lastScrollPosition){
        console.log("going up");
        header.style.cssText = "transform: translateY(-10vh); transition: transform .4s ease-in-out;"
    } else if(newScrollPosition == lastScrollPosition){
        return;  
    }
     else{
        console.log("comming down");   
        header.style.cssText = "transform: translateY(0vh); transition: transform .4s ease-in-out;"
    }
    lastScrollPosition = newScrollPosition;  
}