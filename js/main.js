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
                  <div class="task--row" id="${id}">
                            <div class="${Realizado}" data="realizado" id="${id}"></div>
                            <div class="container-text--task">
                                <input class="text--task ${Line}" id="${id}" placeholder="Tarea" value="">
                            </div>
                            <div class="no_borrado--task" data="eliminado" id="${id}"></div>
                        </div>
                  `;

  containerTask.insertAdjacentHTML("afterbegin", element);
}

function tareaRealizada(element) {
  element.classList.toggle(tareaMarcadaIcon);
  element.classList.toggle(tareaNoMarcadaIcon);
  element.parentNode.querySelector('.text--task').classList.toggle(tareaMarcadaText);
}

function tareaEliminada(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
}

plusIcon.addEventListener('click', ()=>{
  agregarTarea(id, false, false);
  id++
})

containerTask.addEventListener('click', (event)=>{
  const element = event.target;
  const elementoData = element.attributes.data.value;

  if (elementoData === 'realizado') {
    tareaRealizada(element);
  } else if (elementoData==='eliminado'){
    tareaEliminada(element);
  }
})
