const cuentaIcono = document.querySelector(".cuenta_icon");
const iconCerrar = document.querySelector(".icon--cerrar");
const menuOverlay = document.querySelector(".menu_overlay");
const menuContainer = document.querySelector(".container_menu");
const plusIcon = document.querySelector(".plus_icon");
const containerTask = document.querySelector(".container_task");

// Abrir menu tocando el perfil
cuentaIcono.addEventListener("click", () => {
  iconCerrar.classList.toggle("icon_cerrar--no");
  menuOverlay.classList.toggle("menu_overlay--oculto");
  menuContainer.classList.toggle("container_menu--abierto");
});

// Cerrar menu o login tocando cualque parte de la pantalla
menuOverlay.addEventListener("click", () => {
  iconCerrar.classList.remove("icon_cerrar--no");
  menuOverlay.classList.remove("menu_overlay--oculto");
  menuContainer.classList.remove("container_menu--abierto");
});

// Manejo del DOM para crear cada tarea
plusIcon.addEventListener("click", () => {
  const taskRow = document.createElement("div");
  taskRow.classList.add("task--row");

  const marcador = document.createElement("div");
  marcador.classList.add("no_marcado--task");

  const task = document.createElement("div");
  task.classList.add("container-text--task");

  const inputTask = document.createElement("input");
  inputTask.classList.add("text--task");
  inputTask.setAttribute("placeholder", "Tarea");

  const basura = document.createElement("div");
  basura.classList.add("no_borrado--task");

  containerTask.appendChild(taskRow);
  taskRow.appendChild(marcador);
  taskRow.appendChild(task);
  task.appendChild(inputTask);
  taskRow.appendChild(basura);

  // Marcador de tarea

  const marcadorTarea = document.querySelector(".no_marcado--task");
  const textTarea = document.querySelector(".text--task");
  const tarea = document.querySelector('.task--row');

  marcadorTarea.addEventListener('click', (e)=>{
    const item = e.target.parentElement;
    tarea.classList.toggle(item);
  })





  // const marcadorTarea = document.querySelectorAll('.no_marcado--task');
  // const textTarea = document.querySelectorAll('.text--task');

  // for (let i = 0; i < marcadorTarea.length; i++) {
  //   const marcador = marcadorTarea[i];
  //   const textoTarea = textTarea[i];

  //   marcador.addEventListener('click', ()=>{
  //     marcador.classList.toggle('marcado--task');
  //     textoTarea.classList.toggle('text--task_resuelto');

  //     console.log(i);
  //     console.log(marcadorTarea[i]);
  //     console.log(marcadorTarea.length + '.length');
  //   });

  // }
});
