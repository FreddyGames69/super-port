//BOTONES
const botonHome = document.querySelector("#btn-home");
const botonAbout = document.querySelector("#btn-about");
const botonResume = document.querySelector("#btn-resume");
const botonPortafolio = document.querySelector("#btn-portfolio");
//SECCIONES
const main = document.querySelector(".main");
const nav = document.querySelector(".header-main");
const resume = document.querySelector(".resume");
const port = document.querySelector(".portfolio");


const abrirMenuMobile = () =>{
    let boton = document.querySelector("#btn-menu-mobile");
    boton.addEventListener('click', ()=>{
        let nav = document.querySelector(".header-main");
        nav.classList.toggle("show-nav");
    });
}
abrirMenuMobile();


const abrirHome = () =>{
    botonHome.addEventListener('click', ()=>{
        main.classList.remove("show-main");
        nav.classList.remove("show-nav");
        resume.classList.remove("show-resume");
        port.classList.remove("show-portfolio");
        botonHome.classList.add('ico-active');
        botonAbout.classList.remove('ico-active');
        botonResume.classList.remove('ico-active');
        botonPortafolio.classList.remove('ico-active');
    });
}
abrirHome();


const abrirAbout = () => {
    botonAbout.addEventListener('click', ()=>{
        main.classList.add("show-main");
        main.classList.add("animate__bounceInLeft");
        nav.classList.remove("show-nav");
        resume.classList.remove("show-resume");
        port.classList.remove("show-portfolio");
        botonAbout.classList.add('ico-active');
        botonHome.classList.remove('ico-active');
        botonResume.classList.remove('ico-active');
        botonPortafolio.classList.remove('ico-active');
    });
}
abrirAbout();


const abrirResume = () => {
    botonResume.addEventListener('click', ()=>{
        resume.classList.add("show-resume");
        resume.classList.add("animate__fadeInTopLeft")
        nav.classList.remove("show-nav");
        main.classList.remove("show-main");
        port.classList.remove("show-portfolio");
        botonResume.classList.add('ico-active');
        botonAbout.classList.remove('ico-active');
        botonHome.classList.remove('ico-active');
        botonPortafolio.classList.remove('ico-active');
    });
}
abrirResume();


const abrirPortfolio = () => {
    botonPortafolio.addEventListener('click', ()=>{
        port.classList.add("show-portfolio");
        port.classList.add("animate__bounceInLeft")
        nav.classList.remove("show-nav");
        main.classList.remove("show-main");
        resume.classList.remove("show-resume");
        botonPortafolio.classList.add('ico-active');
        botonResume.classList.remove('ico-active');
        botonAbout.classList.remove('ico-active');
        botonHome.classList.remove('ico-active');
    });
}
abrirPortfolio();