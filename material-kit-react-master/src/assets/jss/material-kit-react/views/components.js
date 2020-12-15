import { container } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  ...imagesStyle,
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  title2: {
    fontSize: "1.513rem",
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#000000",
    textDecoration: "none"
  },
  title3: {
    color: "#D78D37",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  subtitle2: {
    fontSize: "1.313rem",
    color: "#000000",
    margin: "10px 0 0"
  },
  leftcap: {
    fontSize: "1.313rem",
    margin: "15px 0px 30px 0px",
    float: "left",
    color: "#000000"
  },
  rightcap: {
    fontSize: "1.313rem",
    margin: "15px 30px 0px 0px",
    float: "right",
    color: "#000000"
  },
  titleCarousel: {
    fontSize: "3.513rem",
    color: "#8A5A23"
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
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  black: {
    color: "#000000"
  }
};

export default componentsStyle;
