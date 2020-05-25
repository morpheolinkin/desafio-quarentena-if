import AboutPage from "../about/about";
import App from "../../../App";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import HelpTwoToneIcon from "@material-ui/icons/HelpTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import PropTypes from "prop-types";
import QuestionAnswerTwoToneIcon from "@material-ui/icons/QuestionAnswerTwoTone";
import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Início" icon={<HomeTwoToneIcon />} {...a11yProps(0)} />
          <Tab label="Sobre" icon={<InfoTwoToneIcon />} {...a11yProps(1)} />
          <Tab
            label="Política de privacidade"
            icon={<LockTwoToneIcon />}
            {...a11yProps(2)}
          />
          <Tab label="Ajuda" icon={<HelpTwoToneIcon />} {...a11yProps(3)} />
          <Tab
            label="Perguntas frequentes"
            icon={<QuestionAnswerTwoToneIcon />}
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <App />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AboutPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
}
