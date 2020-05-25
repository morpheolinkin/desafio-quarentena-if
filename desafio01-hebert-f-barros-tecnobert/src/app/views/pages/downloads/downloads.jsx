import Container from "@material-ui/core/Container";
import Expansion from "./expand";
import Nav from "../../shared/nav";
import React from "react";
import Styled from "../../../../styles/layout/styles";
import Typography from "@material-ui/core/Typography";
import { app } from "../../../../assets/app.json";
import download_files from "../../../../assets/img/download_files_aydf.svg";

function DownloadPage() {
  const classes = Styled();

  return (
    <div className={classes.App}>
      <Nav></Nav>
      <Container>
        <Container maxWidth="sm">
          <Typography className={classes.posts} component="div">
            <img
              className={classes.svg_asset}
              src={download_files}
              alt={app.NAME}
              srcSet={download_files}
            />
            <p>
              Esse projeto usou algumas APIS e Frameworks para ser feito.
            </p>


            <Expansion></Expansion>
          </Typography>
        </Container>
      </Container>
    </div>
  );
}

export default DownloadPage;
