import React from "react";
import { useState } from "react";
import { Input } from "./Input";
import { InstanceButton } from "./Button";
import { v4 as uuidv4 } from "uuid";

function SchoolInstance() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [schoolExp, setSchoolExp] = useState({
    id: uuidv4(),
    schoolName: "",
    degreeType: "",
    degreeName: "",
    endDate: "",
    currentStatus: "",
  });

  let parentSection = "school";
  /* 
  inputMap:
  -takes the schoolExp object
  -breaks it into an array of [key, value arrays.
  -Then it reduces that array, creating an accumulator array that only has
   keys pairs that I want for mapping to input fields.
  -the [] is to define 'accum' as an empty array
  */
  const inputMap = Object.entries(schoolExp).reduce((accum, [key, value]) => {
    if (key !== "id" && key !== "currentStatus") {
      accum.push(key);
    }
    return accum;
  }, []);

  let schoolFields;
  if (isCompleted) {
    schoolFields = (
      <ul className="school-instance">
        <li>School Name: {schoolExp.schoolName}</li>
        <li>Degree Type: {schoolExp.degreeType}</li>
        <li>Degree Name: {schoolExp.degreeName}</li>
        <li>
          {schoolExp.currentStatus === "current"
            ? "Currently enrolled"
            : "Completion Date: " + schoolExp.endDate}
        </li>
      </ul>
    );
  } else {
    schoolFields = (
      <div className="school-instance">
        {inputMap.map((subType) => (
          <Input
            key={subType}
            value={schoolExp[subType]}
            onChange={setSchoolExp}
            type={subType === "endDate" ? "date" : "text"}
            subType={subType}
            parentSection={parentSection}
          />
        ))}
        <Input type="checkbox" parentSection={schoolExp.parentSection} />
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
          handleClick={setIsCompleted}
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
  const [instanceAmount, setInstanceAmount] = useState(1);
  const [instIdList, setInstIdList] = useState([uuidv4()]);
  /* 
  pass a state down to the remove button on each instance so that it can be
  removed on the section level

  pass a setState down to the addNew button so that it can add a new instance
  on the section level
  */
  return (
    <>
      {instIdList.map((id) => (
        <SchoolInstance key={id} />
      ))}
      <InstanceButton type="addNew" handleClick={setInstIdList} />
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
