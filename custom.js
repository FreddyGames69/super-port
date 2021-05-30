const abrirMenuMobile = () =>{
    let boton = document.querySelector("#btn-menu-mobile");
    boton.addEventListener('click', ()=>{
        let nav = document.querySelector(".header-main");
        nav.classList.toggle("show-nav");
    });
}
abrirMenuMobile();


const abrirHome = () =>{
    let boton = document.querySelector("#btn-home");
    boton.addEventListener('click', ()=>{
        let main = document.querySelector(".main");
        main.classList.remove("show-main");
        let nav = document.querySelector(".header-main");
        nav.classList.remove("show-nav");
        let resume = document.querySelector(".resume");
        resume.classList.remove("show-resume");
    });
}
abrirHome();


const abrirAbout = () => {
    let boton = document.querySelector("#btn-about");
    boton.addEventListener('click', ()=>{
        let main = document.querySelector(".main");
        main.classList.add("show-main");
        let nav = document.querySelector(".header-main");
        nav.classList.remove("show-nav");
        let resume = document.querySelector(".resume");
        resume.classList.remove("show-resume");
    });
}
abrirAbout();


const abrirResume = () => {
    let boton = document.querySelector("#btn-resume");
    boton.addEventListener('click', ()=>{
        let resume = document.querySelector(".resume");
        resume.classList.add("show-resume");
        let nav = document.querySelector(".header-main");
        nav.classList.remove("show-nav");
        let main = document.querySelector(".main");
        main.classList.remove("show-main");
    });
}
abrirResume();