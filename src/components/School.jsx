import React from "react";
import { useState } from "react";
import { Input } from "./Input";
import { InstanceButton } from "./Button";
import { v4 as uuidv4 } from "uuid";

function SchoolInstance() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [schoolExp, setSchoolExp] = useState([
    {
      id: uuidv4(),
      schoolName: "",
      degreeType: "",
      degreeName: "",
      dateGrad: "",
      currentStatus: "",
    },
  ]);

  let schoolFields;
  if (isCompleted) {
    schoolFields = schoolExp.map((school) => {
      return (
        <ul key={school.id} className="school-exp">
          <li>School Name: {school.schoolName}</li>
          <li>Degree Type: {school.degreeType}</li>
          <li>Degree Name: {school.degreeName}</li>
          <li>
            {school.currentStatus === "current"
              ? "Currently enrolled"
              : "End Date" + school.dateGrad}
          </li>
        </ul>
      );
    });
  } else {
    schoolFields = (
      <div className="school-instance">
        <Input type="text" subType="school" parentSection="school" />
        <Input type="text" subType="degreeType" parentSection="school" />
        <Input type="text" subType="degreeName" parentSection="school" />
        <Input type="date" subType="endDate" parentSection="school" />
        <Input type="checkbox" parentSection="school" />
      </div>
    );
  }

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
