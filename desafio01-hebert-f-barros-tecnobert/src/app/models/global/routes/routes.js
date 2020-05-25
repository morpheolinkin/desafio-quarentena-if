//import {randon_string16} from '../functions/generateRandonString';

import { links_externos, rotas_internas } from "../../json/app_data";

export let routes = rotas_internas;
export let routes_ext = links_externos;
export let routes_consulta = {
  sucess: routes[3] + routes[4] + true,
  bad: routes[3] + routes[4] + false,
  home:
    routes[3] + "ref=home" ||
    routes[3] + "ref=consulta.html&cpf_valido=false" ||
    routes[3] + "ref=consulta.html&cpf_valido=true",
};
