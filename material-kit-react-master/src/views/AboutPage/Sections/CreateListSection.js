import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import EventAvailable from "@material-ui/icons/EventAvailable";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function CreateListSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>CREA TU LISTA</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="¿Qué has visto?"
              description="Crea tu lista personalizada a partir de decenas de miles de títulos en la base de datos de anime y manga más grande del mundo."
              icon={FormatListBulleted}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="¿Necesitas estar al día?"
              description="Utiliza tu lista para organizar y realizar un seguimiento de los títulos que has completado, tu progreso actual, lo que planeas ver o leer y mucho más."
              icon={EventAvailable}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
