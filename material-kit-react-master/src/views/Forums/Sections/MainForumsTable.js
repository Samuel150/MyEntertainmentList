import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";




import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classNames from "classnames";
import { Link } from "react-router-dom";


import image1 from "assets/img/portFMA.jpg";
import image2 from "assets/img/portGL.jpg";
import image3 from "assets/img/portSNK.jpg";
import image4 from "assets/img/portOP.jpg";
import Forum from "@material-ui/icons/Forum";

const malRows = [
  {icon: Forum, title:"Updates & Announcements",description:"Updates, changes, and additions to MAL."},
  {icon: Forum, title:"FAQ",description:"Site rules, forum rules, database guidelines, review/recommendation guidelines, and other helpful information."},
  {icon: Forum, title:"Support",description:"Have a problem using the site or think you found a bug? Post here."},
  {icon: Forum, title:"Suggestions",description:"Have an idea or suggestion for the site? Share it here."},
  {icon: Forum, title:"MAL Contests",description:"Our season-long anime game and other user competitions can be found here."}
];

const generalRows = [
  {icon: Forum, title:"Introductions",description:"New to MyAnimeList? Introduce yourself here."},
  {icon: Forum, title:"Games, Computers & Tech Support",description:"Discuss visual novels and other video games, or ask our community a computer related question."},
  {icon: Forum, title:"Music & Entertainment",description:"Asian music and live-action series, Western media and artists, best-selling novels, etc."},
  {icon: Forum, title:"Current Events",description:"World headlines, the latest in science, sports competitions, and other debate topics."},
  
]

const useStyles = makeStyles(styles);

export default function MainForumsTable(props) {
  const classes = useStyles();
  const { vertical } = props;
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
            <GridItem xs={12} sm={12} md={8} lg={8}>
              <NavPills
                color= "orange"
                tabs={[
                  {
                    tabButton: "My Anime List",
                    tabContent: (
                      <TableContainer component={Paper}>
                      <Table className={classes.table} size="big" aria-label="a dense table" stickyHeader aria-label="sticky table">
                        <TableBody>
                          {malRows.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell style={{width:"60px"}} align="center">
                                  <row.icon style={{color:'#412014'}} className={iconClasses} />
                              </TableCell>
                              <TableCell  align="left">
                                <div style={{display:"flex", flexDirection:"column"}}>
                                  <Link style={{color:'#8A4023'}} to="/forums">{row.title}</Link>
                                  <div style={{color:'gray'}}>{row.description}</div>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    )
                  },
                  {
                    tabButton: "General",
                    tabContent: (
                      <TableContainer component={Paper}>
                      <Table className={classes.table} size="big" aria-label="a dense table" stickyHeader aria-label="sticky table">
                        <TableBody>
                          {generalRows.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell style={{width:"60px"}} align="center">
                                  <row.icon style={{color:'#412014'}} className={iconClasses} />
                              </TableCell>
                              <TableCell  align="left">
                                <div style={{display:"flex", flexDirection:"column"}}>
                                  <Link style={{color:'#8A4023'}} to="/forums">{row.title}</Link>
                                  <div style={{color:'gray'}}>{row.description}</div>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    )
                  },
                ]}
              />
            </GridItem>

  );
}
