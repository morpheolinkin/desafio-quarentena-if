import * as serviceWorker from "./app/controllers/services/serviceWorker";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import About from "./app/views/pages/about/about";
import App from "./app/App";
import ConsultarPage from "./app/views/pages/consulta/consultar";
import DownloadPage from "./app/views/pages/downloads/downloads";
import FalhaPage from "./app/views/pages/consulta/falha";
import HomePage from "./app/views/pages/home/home";
import React from "react";
import ReactDOM from "react-dom";
import ResultadoPage from "./app/views/pages/consulta/resultado";
import { routes_consulta } from "./app/models/global/routes/routes";
import { urls } from "./assets/app.json";

ReactDOM.render(
  <BrowserRouter keyLength={22}>
    <Switch>
      <Route path={urls.routes[0]} exact={true} component={App} />
      <Route path={urls.routes[1]} exact={true} component={About} />
      <Route path={urls.routes[2]} exact={true} component={DownloadPage} />
      <Route
        path={routes_consulta.home}
        exact={true}
        component={ConsultarPage}
      />
      <Route
        path={routes_consulta.sucess}
        exact={true}
        component={ResultadoPage}
      />
      <Route path={routes_consulta.bad} exact={true} component={FalhaPage} />
      <Route path={urls.routes[5]} exact={true} component={HomePage} />
      {/*<Redirect from="/" to="/#" />*/}
      <Router basename="/map/5AJA3RefFuTZ8z4Gn6BjMgZRgPZ2"> </Router>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
