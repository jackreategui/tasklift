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

// const filaTarea = [];
// filaTarea.push({
//   marcador: '../assets/icon/no_marcado_icon.svg',
//   textTarea: 'Tarea',
//   tacho: '../assets/icon/basura_icon.svg'
// });


{/* <div class="task--row">
  <div class="no_marcado--task"></div>
  <div class="container-text--task">
      <input class="text--task" placeholder="Tarea" value="">
  </div>
  <div class="no_borrado--task"></div>
</div> */}

plusIcon.addEventListener('click', ()=>{
  console.log('tiene que crear una tarea');
  console.log(filaTarea);
});

