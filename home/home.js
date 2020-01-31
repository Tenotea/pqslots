//width="631.765" height="184.603"


const body = document.querySelector('body');
const loadingPage = document.querySelector('.first-loading-page');
const siteIntro = document.querySelector('.intro-page');
const logo = document.querySelector('#logo');
const logoEffect = document.querySelector('#logo path');
const enterText = document.querySelector('.t1');
const enterText2 = document.querySelector('.t2');
const finishLine = document.querySelector('.finish-line'); 
const menuIcon = document.querySelector('#menu-icon');
const desktopNav = document.querySelector('.desktop-nav');
const navOptions = document.querySelector('.nav-options');
const mobileNavigation = document.querySelector('.navigation');

let logoWidth = () => {
    let screenSize = (window.innerWidth * 60)/100;
    Math.ceil(screenSize);
    logo.style.width = screenSize;

    if(screenSize++ || screenSize--){
        logo.style.width = screenSize;
    }    
}

logoWidth();


let loadingEffect = () => {
    loadingPage.style.transform = "translateY(-100vh)";
    logoEffect.style.cssText = "animation: naming 5s ease-in-out 0s 1 alternate forwards;"
     enterText.style.cssText = "animation: text-enter01 1s 1 ease-in-out 3.6s;";
     enterText2.style.cssText= "animation: text-enter02 1s 1 ease-in-out 4.4s;";
     console.log(window.scrollY);    
} 
//setTimeout(loadingEffect, 5000);
window.addEventListener('load', loadingEffect);

enterText.addEventListener("webkitAnimationEnd", () => enterText.className += " add");
enterText2.addEventListener("webkitAnimationEnd", () => {
    enterText2.className += " add";
    body.style.overflow = "unset";
    finishLine.style.cssText = "animation: full 1s 1 ease;"});

finishLine.addEventListener("webkitAnimationEnd" , () => {
    finishLine.style.cssText = "transform: translate(-50%, -50%) scale(1);";
   desktopNav.style.cssText = "transform: translateY(-100vh); transition: transform .4s ease-in-out;"
    // menuIcon.style.cssText = "z-index: 1;"
})





//..............RESPONSIVE_HEADER_TO_USER_SCROLL.............//
// let lastScrollPosition =  window.scrollY;

// window.addEventListener('scroll' , checkScrollDirection);
// function checkScrollDirection(){
//     let newScrollPosition = window.scrollY;
    
//     if(newScrollPosition > lastScrollPosition){
//         console.log("going up");
//         desktopNav.style.cssText = "transform: translateY(-120vh); transition: transform .4s ease-in-out;"
//     } else if(newScrollPosition == lastScrollPosition){
//         return;  
//     }
//      else{
//         console.log("comming down");   
//         desktopNav.style.cssText = "transform: translateY(-100vh); transition: transform .4s ease-in-out;"
//     }
//     lastScrollPosition = newScrollPosition;  
// }

//..........ANDROID_NAV_SLIDE_IN..........//

