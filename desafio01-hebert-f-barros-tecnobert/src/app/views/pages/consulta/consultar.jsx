import ConsultaCPF from "./input.jsx";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import Nav from "../../shared/nav";
import React from "react";
import Styled from "../../../../styles/layout/styles";
import Typography from "@material-ui/core/Typography";
import { app } from "../../../../assets/app.json";
import collaborators from "../../../../assets/img/collaborators_prrw.svg";

function ConsultarPage() {
  const classes = Styled();
  return (
    <div className={classes.App}>
      <Nav></Nav>
      <Container component="div">
        <Container maxWidth="lg" component="div">
          <Typography className={classes.posts} component="div">
            <img
              className={classes.svg_asset}
              src={collaborators}
              alt={app.NAME}
              srcSet={collaborators}
            />
            <Container maxWidth="xs" component="div">
              <Typography component="p" variant="body1">
               Validador de CPF feito com NodeJS + React
              </Typography>
              <Typography component="h5" variant='caption'>
                Preêncha o campo para continuar
              </Typography>
              <Divider></Divider>
              <ConsultaCPF />
            </Container>
          </Typography>
        </Container>
      </Container>
    </div>
  );
}

export default ConsultarPage;
