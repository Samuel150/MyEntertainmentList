import React from "react";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

export default function TemplatePage(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="MAL"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "primary"
        }}
        {...rest}
      />
      {props.children}
      <Footer />
    </div>
  );
}
