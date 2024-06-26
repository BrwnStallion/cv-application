import React from "react";
import { useState } from "react";
import { Input } from "./Input";
import { InstanceButton } from "./Button";

function SchoolInstance() {
  const [isCompleted, setIsCompleted] = useState(false);

  let schoolFields;
  schoolFields = (
    <div className="school-instance">
      <Input type="text" subType="school" parentSection="school" />
      <Input type="text" subType="degreeType" parentSection="school" />
      <Input type="text" subType="degreeName" parentSection="school" />
      <Input type="date" subType="endDate" parentSection="school" />
      <Input type="checkbox" parentSection="school" />
    </div>
  );

  return (
    <>
      {schoolFields}
      <div className="section-buttons">
        <InstanceButton
          type="completeEdit"
          completeState={isCompleted}
          setState={setIsCompleted}
        />
        <InstanceButton type="remove" />
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
      <InstanceButton type="addNew" />
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
