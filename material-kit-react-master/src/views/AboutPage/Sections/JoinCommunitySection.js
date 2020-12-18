import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import WifiTethering from "@material-ui/icons/WifiTethering";
import Forum from "@material-ui/icons/Forum";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Button from "components/CustomButtons/Button.js";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function JoinCommunitySection() {
  let history = useHistory();

  const classes = useStyles();
  return (
    <div>
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>ÚNETE A LA COMUNIDAD</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="¿Qué títulos te gustan?"
              description="Nuestros foros son el mejor lugar para discutir tus series favoritas y mantenerte al día con las noticias y tendencias de anime y manga."
              icon={Forum}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="¿Quiénes más estan en línea?"
              description="¡Conéctate con millones de fanáticos de más de 200 países en todo el mundo en nuestra activa comunidad en línea de más de medio millón de usuarios al día!"
              icon={WifiTethering}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
    <div className={classes.section}>
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <h2 className={classes.title}>¡Descubre más sobre el mundo del anime ahora!</h2>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Button simple href="/signUp">Registrarme</Button>
      </GridItem>
    </GridContainer>
    <div>
    </div>
  </div>
  </div>

  );
}
