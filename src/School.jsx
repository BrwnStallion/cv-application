import React from "react";
import { useState } from "react";

function SchoolInstance() {
  const [isCompleted, setIsCompleted] = useState(false);

  let schoolFields;
  schoolFields = <div className="school-instance"></div>;

  let button;
  if (!isCompleted) {
  }

  return (
    <>
      {schoolFields}
      {button}
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
