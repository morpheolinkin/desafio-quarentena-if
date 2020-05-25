import { Divider, Link } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import React from "react";
import Styled from "../../../../styles/layout/styles";
import Typography from "@material-ui/core/Typography";
import { urls } from "../../../../assets/app.json";

export default function Expansion() {
  const classes = Styled();

  return (
    <div className={classes.Expansion}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Valide facilmente CPF's com o CPF VAL.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Eu mesmo fiz esse validador com TypeScript e tá disponível
            gratuitamente no Github.
            <br /> Usando o npm <br />
            <Typography variant="caption" color="primary" component="code">
              npm i cpf-val --save
              <br /> <br />
              <Divider />
            </Typography>
            <Link href={urls.external[5]}>
              Acesse CPF VAL gratuitamente{" "}
              <OpenInNewIcon color="secondary" className={classes.icons_sm} />
            </Link>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Como instalar a Material UI
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="body1" component="div">
            Instale o React Framework mais popular. Use o pacote NPM
                        gerente para instalar em seu projeto:
            <Divider />
            Usando o npm
            <br />
            <Typography variant="caption" color="primary" component="code">
              npm install @material-ui/core <br />
            </Typography>
            Usando yarn
            <br />
            <Typography variant="caption" color="primary" component="code">
              yarn add @material-ui/core
              <br />
            </Typography>
            <Link href={urls.external[0]}>
              Acesse a UI do material gratuitamente{" "}
              <OpenInNewIcon color="secondary" className={classes.icons_sm} />
            </Link>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Obtenha SVG legais agora! É grátis!
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Faça o download e use em seus projetos belos vetores SVG. Ainda está
                        possível download no formato PNG e também personalize a
            cor principal.
            <br />
            <Link href={urls.external[2]}>
              Acesse Undraw gratuitamente{" "}
              <OpenInNewIcon color="secondary" className={classes.icons_sm} />
            </Link>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Obtenha imagens de fundo incríveis para seus aplicativos da web
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Use Imagens Unsplash gratuitas de graça
            <br />
            <Link href={urls.external[4]}>
              Acesse o Unsplash gratuitamente{" "}
              <OpenInNewIcon color="secondary" className={classes.icons_sm} />
            </Link>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Obtenha belos ícones usando Material UI Icons.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Baixe e use em seus projetos belos ícones. Veja também a lista
                        de links e procure o que você deseja usar.
            <br />
            <Divider />
            Usando o npm
            <br />
            <Typography variant="caption" color="primary" component="code">
              npm install @material-ui/icons <br />
            </Typography>
            Usando yarn
            <br />
            <Typography variant="caption" color="primary" component="code">
              yarn add @material-ui/icons
              <br />
            </Typography>
            <Link href={urls.external[3]}>
              Acesse ícones de interface do usuário de material gratuitamente{" "}
              <OpenInNewIcon color="secondary" className={classes.icons_sm} />
            </Link>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
