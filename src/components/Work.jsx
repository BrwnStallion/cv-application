import React from "react";
import { useState } from "react";
import { Input } from "./Input";
import { InstanceButton } from "./Button";

function WorkInstance() {
  const [isCompleted, setIsCompleted] = useState(false);

  let workFields;
  workFields = (
    <div className="work-instance">
      <Input type="text" subType="employer" parentSection="work" />
      <Input type="text" subType="position" parentSection="work" />
      <Input type="date" subType="startDate" parentSection="work" />
      <Input type="date" subType="endDate" parentSection="work" />
      <Input type="checkbox" parentSection="work" />
    </div>
  );

  function handleClick(e) {
    if (e.target.className === "completeEdit") {
      setIsCompleted(!isCompleted);
    }
  }

  return (
    <>
      {workFields}
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
}

function WorkSection() {
  return (
    <>
      <WorkInstance />
      <InstanceButton type="addNew" />
    </>
  );
}
export { WorkInstance, WorkSection };
