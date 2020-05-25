import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import Nav from "../../shared/nav";
import React from "react";
import ReportProblemTwoToneIcon from "@material-ui/icons/ReportProblemTwoTone";
import Styled from "../../../../styles/layout/styles";
import Typography from "@material-ui/core/Typography";
import { app } from "../../../../assets/app.json";
import the_world_is_mine from "../../../../assets/img/the_world_is_mine_nb0e.svg";

function FalhaPage() {
  const classes = Styled();
  const msgs = {
    status: "Erro brutal!",
    msg: "Esse número não é um CPF válido!.",
  };
  return (
    <div className={classes.App}>
      <Nav />
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
              <Typography component="h5" variant="srOnly" />
              <Divider />
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
                    className={classes.msg_consulta_bad}
                  >
                    <ReportProblemTwoToneIcon /> {msgs.status}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {msgs.msg}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Procure entrar na receita Federal e ver se existem
                    pendencias...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href="/consulta.html&ref=home" size="small">
                    Tentar de novo
                  </Button>
                </CardActions>
              </Card>
            </Container>
          </Typography>
        </Container>
      </Container>
    </div>
  );
}

export default FalhaPage;
