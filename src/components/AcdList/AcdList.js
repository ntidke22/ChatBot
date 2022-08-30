
import React from "react";

import "./AcdList.css";

const AcdList = (props) => {
  const linkMarkup = props.acdoptions.map((link) => (
    <li key={link.id} className="link-list-item" id="outer2">
        {link.text}
    </li>
  ));

  return <ul id="inner1" className="link-list"  style={{listStyle:'none'}}>{linkMarkup}</ul>;
};

export default AcdList;