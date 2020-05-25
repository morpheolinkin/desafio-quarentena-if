import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { deepPurple } from "@material-ui/core/colors";
import { routes_consulta } from "../../../models/global/routes/routes";

const cpf = require("cpf-val");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: deepPurple[500],
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: deepPurple[500],
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important",
    },
  },
})(TextField);
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    "&:hover": {
      backgroundColor: deepPurple[700],
    },
  },
}))(Button);

export default function InputsConsultaCPF() {
  const classes = useStyles();

  const [myCpf, setName] = useState("");

  const handleSubmit = (evt, input, bad, sucess) => {
    evt.preventDefault();

    input = myCpf;

    bad = routes_consulta.bad;
    sucess = routes_consulta.sucess;

    if (cpf(input) === true) {
      window.location.href = sucess;
    } else {
      window.location.href = bad;
    }
  };

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <ValidationTextField
          className={classes.margin}
          label="Seu CPF"
          required
          variant="outlined"
          value={myCpf}
          onChange={(e) => setName(e.target.value)}
          defaultValue={null}
          placeholder="000.000.000.00"
          type="number"
          id="entrada_cpf"
        />

        <ColorButton
          variant="contained"
          color="primary"
          type="submit"
          value="Submit"
          className={classes.margin}
        >
          Validar
        </ColorButton>
      </form>
    </>
  );
}
