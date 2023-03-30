document.addEventListener('DOMContentLoaded',()=>{
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
    navegacionFija();
}

function navegacionFija(){
    const header = document.querySelector(".header");
    const festival = document.querySelector(".sobre-festival");
    const body = document.querySelector("body");
    window.addEventListener("scroll",()=>{
        console.log();
        if(festival.getBoundingClientRect().top <0){ //ya pasamos el elemento
                header.classList.add("fijo");
                body.classList.add("body-scroll");
        }else{
            header.classList.remove("fijo");
                body.classList.remove("body-scroll");

        }

    });
}

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imagenes");
    for (let i = 1; i <= 12; i++) {
       const img= document.createElement("picture");
       img.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="escenarios">
       `;

       img.addEventListener("click",()=>{
            mostrarImagen(i);
       });

       galeria.appendChild(img);
    }
}

function mostrarImagen(i){
    const img = document.createElement("picture");
    img.innerHTML = `
        <source srcset="build/img/grande/${i}.avif" type="image/avif">
        <source srcset="build/img/grande/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${i}.jpg" alt="escenarios">
       `;

    //    crea el overlay con la imagen
    const overlay = document.createElement("div");
    overlay.appendChild(img);
    overlay.classList.add("overlay");
    overlay.addEventListener("click",()=>{
         const body = document.querySelector("body");
         body.classList.remove("fijar-body");
         overlay.remove();
    });

    //boton para cerrar
    // const btnCerrar=document.createElement("p");
    // btnCerrar.textContent="X";
    // btnCerrar.classList.add("btn-cerrar");
    // overlay.appendChild(btnCerrar);

    // btnCerrar.addEventListener("click",()=>{
    //      const body = document.querySelector("body");
    //      body.classList.remove("fijar-body");
    //     overlay.remove();
    // })

    // añade al html
    const body= document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
}