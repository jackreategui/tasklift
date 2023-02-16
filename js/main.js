const cuentaIcono = document.querySelector('.cuenta_icon');
const iconCerrar = document.querySelector('.icon--cerrar');
const menuOverlay = document.querySelector('.menu_overlay');
const menuContainer = document.querySelector('.container_menu');
const plusIcon = document.querySelector('.plus_icon');
// const taskRow = document.querySelector('.task--row');
const containerTask = document.querySelector('.container_task');
// const marcadorTarea = document.querySelector('.no_marcado--task');
// const textTarea = document.querySelector('.text--task');

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

  const taskRow = document.createElement('div');
  taskRow.classList.add('task--row');

  const marcador = document.createElement('div');
  marcador.classList.add('no_marcado--task');

  const task = document.createElement('div');
  task.classList.add('container-text--task');

  const inputTask = document.createElement('input');
  inputTask.classList.add('text--task');
  inputTask.setAttribute('placeholder', 'Tarea');

  
  const basura = document.createElement('div');
  basura.classList.add('no_borrado--task');
  
  containerTask.appendChild(taskRow);
  taskRow.appendChild(marcador);
  taskRow.appendChild(task);
  task.appendChild(inputTask);
  taskRow.appendChild(basura);

  marcarTask();
});

function marcarTask() {
  const marcadorTarea = document.querySelector('.no_marcado--task');
  const textTarea = document.querySelector('.text--task');
  const borrarTask = document.querySelector('.no_borrado--task');
  const taskRow = document.querySelector('.task--row');

  marcadorTarea.addEventListener('click', ()=>{
    marcadorTarea.classList.toggle('marcado--task');
    textTarea.classList.toggle('text--task_resuelto');
  });

  borrarTask.addEventListener('click', ()=>{
    taskRow.parentNode.removeChild(taskRow);
  });
};