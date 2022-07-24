const nav = document.querySelector("nav");
let userScroll_Y = window.scrollY;
window.addEventListener("scroll", () => {
    (userScroll_Y > 528) ? nav.style = "display: none;" : nav.style = "display: visible";
    userScroll_Y = window.scrollY;
})

const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const inputs = document.querySelectorAll('.mailTo');
// submit.addEventListener('click', function(e){
//     e.preventDefault();
//     inputs.forEach((input, i) => {
//         const name = inputs[0].value;
//         const email = inputs[1].value;
//         const message = inputs[2].value;
//         console.log(name, email, message);
//         // window.open(`mailto:dockadams333@gmail.com?subject=test&body=${message}`);
//     })
// });

