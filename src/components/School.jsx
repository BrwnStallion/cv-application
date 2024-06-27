import React from "react";
import { useState } from "react";
import { Input } from "./Input";
import { InstanceButton } from "./Button";
import { v4 as uuidv4 } from "uuid";

function SchoolInstance({ id, handleRemove }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [schoolExp, setSchoolExp] = useState({
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
    if (key !== "currentStatus") {
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
        <Input type="checkbox" parentSection={parentSection} />
      </div>
    );
  }

  return (
    <>
      {schoolFields}
      <div className="instance-buttons">
        <InstanceButton
          type="completeEdit"
          completeState={isCompleted}
          handleClick={setIsCompleted}
        />
        <InstanceButton
          type="remove"
          instanceId={id}
          handleClick={handleRemove}
        />
      </div>
    </>
  );
}

function SchoolSection() {
  const [instIdList, setInstIdList] = useState([uuidv4()]);
  return (
    <>
      {instIdList.map((id) => (
        <SchoolInstance key={id} id={id} handleRemove={setInstIdList} />
      ))}
      <InstanceButton type="addNew" handleClick={setInstIdList} />
    </>
  );
}

export { SchoolInstance, SchoolSection };
