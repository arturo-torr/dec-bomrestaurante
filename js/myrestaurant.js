import RestaurantManagerApp from "./restaurantsmanagerApp.js";

// Refactorización en objeto literal para ser invocado en base al nombre de la acción
const historyActions = {
  init: () => {
    RestaurantManagerApp.handleInit();
  },
  dishesRandomList: (event) =>
    RestaurantManagerApp.handleDishesRandomList(event.state.name),
};

// Se define 'popstate' para restaurar el estado de la página en función del
// tipo de acción apilada
window.addEventListener("popstate", (event) => {
  if (event.state) {
    historyActions[event.state.action](event);
  }
});

history.replaceState({ action: "init" }, null);
