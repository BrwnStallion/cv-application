import React from "react";
import { useState } from "react";
import { Input } from "./Input";
import { InstanceButton } from "./Button";

function SchoolInstance() {
  const [isCompleted, setIsCompleted] = useState(false);

  let schoolFields;
  schoolFields = (
    <div className="school-instance">
      <Input type="text" />
    </div>
  );

  let button;
  if (!isCompleted) {
    button = (
      <>
        <InstanceButton
          type="completeEdit"
          onClick={handleClick}
          isCompleted={isCompleted}
        />
        <InstanceButton type="remove" onClick={handleClick} />
      </>
    );
  }

  function handleClick(e) {
    /* toggle the state (which will trigger a re-render) */
    if (e.target.className === "completeEdit") {
      setIsCompleted(!isCompleted);
    }
  }
  return (
    <>
      {schoolFields}
      <div className="section-buttons">
        <InstanceButton
          type="completeEdit"
          onClick={handleClick}
          isCompleted={isCompleted}
        />
        <InstanceButton type="remove" onClick={handleClick} />
      </div>
    </>
  );
  /*
    Input / <p> (changes based on state)
      school name
      type of degree
      degree name
      date graduated
      select: currently in school
    'complete' button / 'edit' button + 'remove' button
      - button changes based on state
    */
}

function SchoolSection() {
  return (
    <>
      <SchoolInstance />
      <Button type="addNew" />
    </>
  );
  /* 
  initial school instance
  'remove' button (for each school instance)
  (inserted other school instances)
  'add new' button
  */
}

export { SchoolInstance, SchoolSection };
