import React from "react";
import { useState } from "react";

function InstanceButton({ type, completeState, setState }) {
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
  const commitInstance = (e) => {
    if (e.target.className === "completeEdit") {
      setState((prevState) => !prevState);
    }
  };

  return (
    <button className={type} onClick={commitInstance}>
      {text}
    </button>
  );
}

function SectionButton() {}

function Button() {}
export { InstanceButton, SectionButton };
