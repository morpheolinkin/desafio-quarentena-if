import { deepPurple, green, grey, red } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";

const bg_img = "url('https://source.unsplash.com/random')";

//let bg_img = "url('"+img+"')";
const colors = {
  $primary: grey[50],
  $secondary: "#777",
  $border: "1px solid " + grey[800],
  hover: {
    $primary: grey[50],
    $secondary: grey[50],
    $border: "1px solid #777",
    $box_shandown: "2px 2px 2px 2px #999",
  },
};
const Styled = makeStyles((theme) => ({
  body: {
    margin: 0,
    border: 0,
  },
  center: {
    textAlign: "center",
  },
  AppLogo: {
    height: "40vmin",
    pointerEvents: "none",
  },
  msg_consulta_sucess: {
    color: green[500],
  },
  msg_consulta_bad: {
    color: red[500],
  },
  svg_home: {
    width: "60px%",
  },
  svg_asset: {
    width: "200px",
    marginTop: "22px",
    textAlign: "center",
  },
  icons: {
    position: "relative",
    width: "16px",
    height: "16px",
  },
  icons_sm: {
    position: "relative",
    width: "12px",
    height: "12px",
  },
  App: {
    textAlign: "center",
  },
  AppPaper: {
    background: "#ffffffab",
    padding: "36px",
  },

  AppHeader: {
    backgroundImage: bg_img,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: grey[300],
    fontFamily: "Ubuntu",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  Expansion: {
    width: "100%",
  },

  Nav: {
    height: 50,
    marginBottom: "175px",
    fontFamily: "Ubuntu",
  },
  h1: {
    color: grey[500],
  },

  grow: {
    flexGrow: 1,
  },
  links: {
    color: grey[50],
    marginLeft: "22px",
    marginRight: "22px",
    fontFamily: "Ubuntu",
  },
  AppBar: {
    boxShadow: "0 2px 2px 2px #ffffff18",
    backgroundColor: deepPurple[600],
    fontFamily: "Ubuntu",
  },
  posts: {
    backgroundColor: "#ffffffab",
    height: "100vh",
    marginTop: "82px",
    boxShadow: colors.hover.$box_shandown,
    borderRadius: "6px",
    padding: 16,
    color: colors.$secondary,
    fontFamily: "Ubuntu",
    fontWeight: "600",
  },
  title: {
    fontFamily: "Ubuntu",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  "@media (prefers-reduced-motion: no-preference)": {
    AppLogo: {
      animation: "App-logo-spin infinite 20s linear",
    },
  },

  AppLink: {
    color: "#fff",
  },

  "@keyframes App-logo-spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  "@media screen and (max-width: 320px)": {
    bgNav: {
      display: "none",
    },

    posts: {
      backgroundColor: "#ffffffab",
      height: "auto",
      marginTop: "32px",
      boxShadow: colors.hover.$box_shandown,
      borderRadius: "6px",
      padding: 8,
      color: colors.$secondary,
      fontFamily: "Ubuntu",
      fontWeight: "600",
    },
    AppHeader: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: grey[50],
    },
  },
  "@media screen and (max-width: 360px)": {
    bgNav: {
      display: "none",
    },

    AppHeader: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: grey[50],
    },
    posts: {
      backgroundColor: "#ffffffab",
      height: "auto",
      marginTop: "42px",
      boxShadow: colors.hover.$box_shandown,
      borderRadius: "6px",
      padding: 8,
      color: colors.$secondary,
      fontFamily: "Ubuntu",
      fontWeight: "600",
    },
  },
  "@media screen and (max-width: 720px)": {
    bgNav: {
      display: "none",
    },

    posts: {
      backgroundColor: "#ffffffab",
      marginTop: "42px",
      boxShadow: colors.hover.$box_shandown,
      borderRadius: "6px",
      padding: 8,
      color: colors.$secondary,
      fontFamily: "Ubuntu",
    },
    AppHeader: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: grey[50],
    },
  },
}));
export default Styled;
