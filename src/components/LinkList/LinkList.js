
import React from "react";
import "./LinkList.css";

const LinkList = (props) => {
  const linkMarkup = props.poptions.map((link) => (
    <li key={link.id} className="link-list-item" id="outer">
        {link.text}
    </li>
  ));

  return <ul id="lin" className="link-list" style={{listStyle:'none'}}>{linkMarkup}</ul>;
};

export default LinkList;