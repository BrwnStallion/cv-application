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
  function handleClick(e) {
    if (e.target.className === "completeEdit") {
      setState(!completeState);
    }
  }

  return (
    <button className={type} onClick={handleClick}>
      {text}
    </button>
  );
}

function SectionButton() {}

function Button() {}
export { InstanceButton, SectionButton };
