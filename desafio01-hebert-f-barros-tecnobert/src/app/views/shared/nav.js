import { routes, routes_ext } from "../../models/global/routes/routes";

import AppBar from "@material-ui/core/AppBar";
import CloudDownload from "@material-ui/icons/CloudDownload";
import Divider from "@material-ui/core/Divider";
import GitHub from "@material-ui/icons/GitHub";
import House from "@material-ui/icons/House";
import Link from "@material-ui/core/Link";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import React from "react";
import Styled from "../../../styles/layout/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { app } from "../../../assets/app.json";

export default function Nav() {
  const classes = Styled();
  function toHome() {
    window.location.href = routes[0];
  }
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <Typography
            onClick={toHome}
            className={classes.title}
            variant="h5"
            noWrap
            color="inherit"
            component="h1"
          >
            {app.NAME}
          </Typography>
          <div className={classes.grow} />
          <Link href={routes[0]} className={classes.links}>
            <House className={classes.icons} /> Home{" "}
          </Link>

          <Link href={routes[2]} className={classes.links}>
            <CloudDownload className={classes.icons} /> Downloads
          </Link>
          <Divider />

          <Link href={routes_ext[1]} className={classes.links}>
            <GitHub className={classes.icons} /> Repo{" "}
            <OpenInNewIcon className={classes.icons_sm} />
          </Link>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Link href={routes[1]} className={classes.links}>
              Sobre
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <Link href={routes[0]} className={classes.links}>
              {app.NAME}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
