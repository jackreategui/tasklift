const cuentaIcono = document.querySelector(".cuenta_icon");
const iconCerrar = document.querySelector(".icon--cerrar");
const menuOverlay = document.querySelector(".menu_overlay");
const menuContainer = document.querySelector(".container_menu");
const plusIcon = document.querySelector(".plus_icon");
const containerTask = document.querySelector(".container_task");
const tareaMarcadaIcon = 'marcado--task';
const tareaNoMarcadaIcon = 'no_marcado--task';
const tareaMarcadaText = 'text--task_resuelto';
const tareaNoMarcadaText = 'text--task';
let id = 0;

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

function agregarTarea(id, realizado, eliminado) {
  if (eliminado){return};

  const Realizado = realizado ?tareaMarcadaIcon : tareaNoMarcadaIcon;
  const Line = realizado ?tareaMarcadaText : '';

  const element = `
                  <div class="task--row">
                            <div class="${Realizado}" id="${id}"></div>
                            <div class="container-text--task">
                                <input class="text--task ${Line}" id="${id}" placeholder="Tarea" value="">
                            </div>
                            <div class="no_borrado--task" id="${id}"></div>
                        </div>
                  `;

  containerTask.insertAdjacentHTML("afterbegin", element);
}

plusIcon.addEventListener('click', ()=>{
  agregarTarea(id, false, false);
  id++
})




// plusIcon.addEventListener("click", () => {
//   const taskRow = document.createElement("div");
//   taskRow.classList.add("task--row");

//   const marcador = document.createElement("div");
//   marcador.classList.add("no_marcado--task");

//   const task = document.createElement("div");
//   task.classList.add("container-text--task");
  
//   const inputTask = document.createElement("input");
//   inputTask.classList.add("text--task");
//   inputTask.setAttribute("placeholder", "Tarea");
  
//   const basura = document.createElement("div");
//   basura.classList.add("no_borrado--task");
  
//   containerTask.appendChild(taskRow);
//   taskRow.appendChild(marcador);
//   taskRow.appendChild(task);
//   task.appendChild(inputTask);
//   taskRow.appendChild(basura);
  
  // const marcadorTarea = document.querySelectorAll(".no_marcado--task");
  // const textTarea = document.querySelectorAll(".text--task");

  // for (let i = 0; i < marcadorTarea.length; i++) {
  //   const marcadorID = 'no_marcado--task_' + i;

  //   marcador.setAttribute("id", marcadorID);

  //   let marcadorBtnId = document.querySelector('#no_marcado--task_' + i);

  //   marcadorBtnId.addEventListener('click', ()=>{
  //     marcador.classList.toggle("marcado--task");
  //     console.log('hola');
  //     console.log(i);
  //   })
  // }

  // for (let i = 0; i < textTarea.length; i++) {
  //   const textTareaId = 'text--task_' + i;
    
  //   inputTask.setAttribute("id", textTareaId);

  //   let textTareaBtnId = document.querySelector('#text--task_' + i);

  //   textTareaBtnId.addEventListener('click', ()=>{
  //     textTarea.classList.toggle("text--task_resuelto");
  //   })
  // }

  // Marcador de tarea

//   marcadorTarea.forEach(e=>{
//     e.addEventListener('click', evento=>{
//       let marcadoClick = evento.target;
//       marcadoClick.classList.toggle("marcado--task");
//       console.log('hola');
//     })
//   });
// });
