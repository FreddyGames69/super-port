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
    });
}
abrirHome();


const abrirAbout = () =>{
    let boton = document.querySelector("#btn-about");
    boton.addEventListener('click', ()=>{
        let main = document.querySelector(".main");
        main.classList.toggle("show-main");
        let nav = document.querySelector(".header-main");
        nav.classList.remove("show-nav");
    });
}
abrirAbout();