import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  color: {
    background: "#D76437",
  },
  buttonText: {
    fontSize: "1.013rem",
    maxWidth: "300",
    color: "#FFFFFF"
  },
  leftcap: {
    fontSize: "1.313rem",
    float: "left",
    margin: "15px 15px 0px 0px",
    color: "#000000"
  },
  rightcap: {
    fontSize: "1.313rem",
    margin: "15px 0px 15px 0px",
    float: "right",
    color: "#000000"
  },
  leftlist: {
    fontSize: "1.113rem",
    float: "left",
    margin: "0px 15px 0px 15px",
    color: "#000000"
  },
  rightlist: {
    fontSize: "1.113rem",
    float: "right",
    margin: "0px 40px 15px 15px",
    color: "#000000"
  },
  titleProf: {
    fontSize: "2.013rem",
    color: "#D76437"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
};

export default profilePageStyle;
