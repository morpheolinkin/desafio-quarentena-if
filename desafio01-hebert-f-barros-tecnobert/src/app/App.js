import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import React from "react";
import Styled from "../styles/layout/styles";
import Typography from "@material-ui/core/Typography";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { app } from "../assets/app.json";
import { routes_consulta } from "./models/global/routes/routes";

function App() {
  const classes = Styled();
  function toGettingstarted() {
    window.location.href = routes_consulta.home;
  }
  return (
    <>
      <header className={classes.AppHeader}>
        <Paper className={classes.AppPaper}>
          <Typography
            className={classes.title}
            variant="h3"
            noWrap
            color="primary"
          >
            {app.NAME}
          </Typography>
          <Typography variant="p" color="textSecondary" component="p">
            Validador de CPF feito com NodeJs e React
          </Typography>

          <Button variant="outlined" color="default" onClick={toGettingstarted}>
            Começar <VerifiedUserIcon />
          </Button>
        </Paper>{" "}
      </header>
    </>
  );
}

export default App;
