const body = document.querySelector("body");
const arrows = document.querySelectorAll(".circle-container");

const nav = document.querySelector("nav");
//nav heihgt is nav.clientHeight;
//offsetHeight for height + padding and border
let userScroll_Y = window.scrollY;
let introText = document.getElementById("intro-text");
window.addEventListener("scroll", () => {
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

/*Projects*/

const projectList = document.getElementById("project-list");
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card,i) => card.setAttribute("id", `p-${i}`));
console.log(projectList);
console.log(projectCards);
/*
1. add event listener click for each card
2. when clicked, get the id that was clicked
3. filter for projectList childNodes, only keeping one that was not clicked
...the rest you put to display: none or hide element/or remove from DOM
4. make filtered childNode take up entire container
*/

projectCards.forEach((card) => card.addEventListener('click', function(e){
    const hideNodes = Array.from(projectList.childNodes).filter((node) => node.id !== card.id);
    hideNodes.forEach((node) => node.style = "display: none;");
    projectList.style = "grid-template-columns: 1fr; grid-template-rows: 1fr;";
    card.style = "width: 100%; height: 100%; pointer-events: none; display: grid;";
    const para = document.createElement("p");
    para.innerText = "Hello";
    para.style = "color: red";
    card.appendChild(para);
}))
