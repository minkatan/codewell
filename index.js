const navToggle = document.querySelector(".navbar-toggler");
const navCollapse = document.querySelector(".navbar-collapse")

// navToggle.addEventListener("click",function()
// {

//     navCollapse.classList.toggle("collapsed")
// });

navToggle.addEventListener("click",function()
{

    navCollapse.classList.toggle("show")
});