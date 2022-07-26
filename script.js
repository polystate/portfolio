const body = document.querySelector("body");
const arrows = document.querySelectorAll(".circle-container");

const nav = document.querySelector("nav");
//nav heihgt is nav.clientHeight;
//offsetHeight for height + padding and border
let userScroll_Y = window.scrollY;
let introText = document.getElementById("intro-text");
window.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    (userScroll_Y > 667) ? nav.style = "display: none;" : nav.style = "display: visible;";
    if(window.scrollY >= 737 && window.scrollY < 1510){
        // console.log('insert up arrow')
        
    }
    userScroll_Y = window.scrollY;
})

arrows.forEach((arrow) => arrow.addEventListener('click',function(e){
    console.log('arrow clicked');
    window.scroll({top: 0, behavior: 'smooth'});
}))

