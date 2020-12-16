/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Anime"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/topAnime" className={classes.dropdownLink}>
              Top Anime
            </Link>,
            <Link to="/newslist" className={classes.dropdownLink}>
              Noticias
            </Link>,
                        <Link to="/searchResults" className={classes.dropdownLink}>
                        Buscar Anime
                      </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Comunidad"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/forums" className={classes.dropdownLink}>
              Foros
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/profile"
          color="transparent"
          className={classes.navLink}
        >
          Perfil
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/login"
          color="transparent"
          className={classes.navLink}
        >
          Ingresar
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/signUp"
          simple
          color="white"
          className={classes.navLink}
        >
          Registrarse
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Ayuda"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/about" className={classes.dropdownLink}>
              Acerca de
            </Link>
          ]}
        />
      </ListItem>
    </List>
  );
}
