import React from "react";
import "./custom-button.styles.scss";

export const CustomButton = ({ children, ...otherprops }) => {
  console.log(children);
  return (
    <button class="custom-button" {...otherprops}>
      {children}
    </button>
  );
};
