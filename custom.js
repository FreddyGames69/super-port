const abrirMenuMobile = () =>{
    let boton = document.querySelector("#btn-menu-mobile");
    boton.addEventListener('click', ()=>{
        let nav = document.querySelector(".header-main");
        nav.classList.toggle("show-nav");
    });
}
abrirMenuMobile();