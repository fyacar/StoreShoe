const menu = document.querySelector('.menu');
const btnCerrar = document.querySelector('.btnCerrar');
const nav = document.querySelector('nav');

menu.addEventListener('click',()=>{
    nav.classList.add('open-nav')
})

btnCerrar.addEventListener('click',()=>{
    nav.classList.remove('open-nav')
})