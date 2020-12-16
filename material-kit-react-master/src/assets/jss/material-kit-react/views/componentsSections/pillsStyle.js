import { container, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js"

const pillsStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  ...imagesStyle,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }
};

export default pillsStyle;
