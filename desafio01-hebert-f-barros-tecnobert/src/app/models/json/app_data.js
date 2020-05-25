import { urls } from "../../../assets/app.json";

const rotas_do_app = {
  urls: {
    routes: [
      urls.routes[0],
      urls.routes[1],
      urls.routes[2],
      urls.routes[3],
      urls.routes[4],
      urls.routes[5],
    ],
    external: [
      urls.external[0],
      urls.external[1],
      urls.external[2],
      urls.external[3],
      urls.external[4],
    ],
  },
};
export let rotas_internas = rotas_do_app.urls.routes;
export let links_externos = rotas_do_app.urls.external;