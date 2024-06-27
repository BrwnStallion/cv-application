import React from "react";
import { useState } from "react";

function InstanceButton({ type, completeState, handleClick }) {
  /* 'complete'/'edit', 'remove', 'add new' buttons */
  let text;
  switch (type) {
    case "completeEdit":
      text = completeState ? "Edit" : "Complete";
      break;
    case "remove":
      text = "Remove";
      break;
    case "addNew":
      text = "Add New";
      break;
  }

  const onClick = (e) => {
    if (e.target.className === "completeEdit") {
      handleClick((prevState) => !prevState);
    } else if (e.target.className === "addNew") {
      // add logic for adding new instance, using passed down set function
    }
  };

  return (
    <button className={type} onClick={onClick}>
      {text}
    </button>
  );
}

function SectionButton() {}

function Button() {}
export { InstanceButton, SectionButton };
