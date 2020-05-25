import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import Nav from "../../shared/nav";
import React from "react";
import Styled from "../../../../styles/layout/styles";
import Typography from "@material-ui/core/Typography";
import { app } from "../../../../assets/app.json";
import the_world_is_mine from "../../../../assets/img/the_world_is_mine_nb0e.svg";

function ResultadoPage() {
  const classes = Styled();
  const msgs = {
    status: "Validado!",
    msg: "Seu CPF foi validado com sucesso!",
  };
  return (
    <div className={classes.App}>
      <Nav></Nav>
      <Container component="div">
        <Container maxWidth="lg" component="div">
          <Typography className={classes.posts} component="div">
            <img
              className={classes.svg_asset}
              src={the_world_is_mine}
              alt={app.NAME}
              srcSet={the_world_is_mine}
            />
            <Container maxWidth="xs" component="div">
              <Typography component="p" variant="body1">
                Abaixo está o resultado da sua consulta.
              </Typography>
              <Typography component="h5" variant="srOnly"></Typography>
              <Divider></Divider>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Situação do CPF:
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.msg_consulta_sucess}
                  >
                    <CheckCircleTwoToneIcon /> {msgs.status}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {msgs.msg}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Saiba mais</Button>
                </CardActions>
              </Card>
            </Container>
          </Typography>
        </Container>
      </Container>
    </div>
  );
}

export default ResultadoPage;
