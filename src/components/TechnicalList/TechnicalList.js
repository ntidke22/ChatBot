
import React from "react";

import "./TechnicalList.css";

const TechnicalList = (props) => {
  const linkMarkup = props.Techoptions.map((link) => (
    <li key={link.id} className="link-list-item" id="outer1">
        {link.text}
    </li>
  ));
  return <ul id="inner2" className="link-list"  style={{listStyle:'none'}}>{linkMarkup}</ul>;
};
export default TechnicalList;