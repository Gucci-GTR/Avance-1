
let navegacion = document.querySelector('.navegacion')

function scrollfondo(){
    let scrollTop = document.documentElement.scrollTop;
    navegacion.style.transform = 'translateY(' * scrollTop * 0.3 + 'px)';
}

window.addEventListener('scroll',scrollfondo);