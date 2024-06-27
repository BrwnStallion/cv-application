import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function InstanceButton({
  type,
  completeState,
  instanceId,
  handleClick,
  context,
}) {
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
    switch (e.target.className) {
      case "completeEdit":
        handleClick((prevState) => !prevState);
        break;

      case "addNew":
        if (context === "item") {
          // for item level instance addition
          handleClick((prevValues) => ({
            ...prevValues,
            resp: [
              ...prevValues.resp,
              {
                id: uuidv4(),
                content: "",
              },
            ],
          }));
        } else {
          // for section level instance addition
          handleClick((prevIds) => [...prevIds, uuidv4()]);
        }
        break;

      case "remove":
        if (context === "item") {
          // for item level instance removal
          handleClick((prevValues) => ({
            ...prevValues,
            resp: prevValues.resp.filter((item) => item.id !== instanceId),
          }));
        } else {
          // for section level instance removal
          handleClick((prevIds) => prevIds.filter((id) => id !== instanceId));
        }
        break;
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
