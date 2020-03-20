import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {({ language }) => (language === "english" ? "Submit" : "Voorleg")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
