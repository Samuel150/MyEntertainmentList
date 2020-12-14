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
          <h2 className={classes.title}>JOIN THE COMMUNITY</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Which titles do you like?"
              description="Our forums are the best place to discuss your favorite series and keep up to date with anime and manga news and trends."
              icon={Forum}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Who else is online?"
              description="Connect with millions of fans from over 200 countries worldwide in our active online community of over half a million users a day!"
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
        <h2 className={classes.title}>Discover more about the world of anime and manga now!</h2>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Button simple href="/signUp">Sign Up</Button>
      </GridItem>
    </GridContainer>
    <div>
    </div>
  </div>
  </div>

  );
}
