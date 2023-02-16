const cuentaIcono = document.querySelector('.cuenta_icon');
const iconCerrar = document.querySelector('.icon--cerrar');
const menuOverlay = document.querySelector('.menu_overlay');
const menuContainer = document.querySelector('.container_menu');
const plusIcon = document.querySelector('.plus_icon');
const taskRow = document.querySelector('.task--row');
const containerTask = document.querySelector('.container_task');

cuentaIcono.addEventListener('click', () => {
  iconCerrar.classList.toggle('icon_cerrar--no');
  menuOverlay.classList.toggle('menu_overlay--oculto');
  menuContainer.classList.toggle('container_menu--abierto');
})

menuOverlay.addEventListener('click', () => {
  iconCerrar.classList.remove('icon_cerrar--no');
  menuOverlay.classList.remove('menu_overlay--oculto');
  menuContainer.classList.remove('container_menu--abierto');
})

const filaTarea = [];
filaTarea.push({

});

plusIcon.addEventListener('click', ()=>{
  const html = 
})