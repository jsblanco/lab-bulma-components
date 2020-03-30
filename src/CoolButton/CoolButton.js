import React from "react";
import "bulma/css/bulma.css";

const CoolButton = (props) => {
  let classList = `button is-small ${props.className}`;
  if (props.isRounded) {
    classList += " is-rounded";
  }
  if (props.isDanger) {
    classList += " is-danger";
  }
  if (props.isSuccess) {
    classList += " is-success";
  }
  if (props.isSmall) {
    classList += " is-small";
  }

  return (
      <button className={classList}>
          {props.children}
      </button>
  );
};

export default CoolButton;
