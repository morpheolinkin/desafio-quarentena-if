import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import GitHub from "@material-ui/icons/GitHub";
import Nav from "../../shared/nav";
import React from "react";
import Styled from "../../../../styles/layout/styles";
import Typography from "@material-ui/core/Typography";
import { urls } from "../../../../assets/app.json";

function AboutPage() {
  const classes = Styled();

  return (
    <>
      <Nav />
      <header className={classes.AppHeader}>
        <Container maxWidth="sm">
          <Typography className={classes.posts} component="div">
            <p>
              Validador de CPF feito com ReactJS. Todas as libs e frameworks
              estão na página de download. Se você quer testar essa aplicação
              veja o README.md no repositório do GIthub.
            </p>

            <Button
              variant="contained"
              color="default"
              className={classes.center}
              target="_blank"
              rel="noopener noreferrer"
              href={urls.external[1]}
            >
              <GitHub /> Contribute on Github
            </Button>
          </Typography>
        </Container>
      </header>
    </>
  );
}

export default AboutPage;
