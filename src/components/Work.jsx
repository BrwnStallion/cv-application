import React from "react";
import { useState } from "react";
import { Input } from "./Input";
import { InstanceButton } from "./Button";
import { v4 as uuidv4 } from "uuid";

function WorkInstance({ id, handleRemove }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [workExp, setWorkExp] = useState({
    employerName: "",
    positionName: "",
    resp: [""],
    endDate: "",
    currentStatus: "",
  });

  let parentSection = "work";
  let workFields;
  if (isCompleted) {
    <p></p>;
  } else {
    workFields = (
      <div className="work-instance">
        <Input type="text" subType="employerName" parentSection="work" />
        <Input type="text" subType="positionName" parentSection="work" />
        <Input type="date" subType="startDate" parentSection="work" />
        <Input type="date" subType="endDate" parentSection="work" />
        <Input type="checkbox" parentSection="work" />
      </div>
    );
  }

  return (
    <>
      {workFields}
      <div className="section-buttons">
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

function WorkSection() {
  const [instIdList, setInstIdList] = useState([uuidv4()]);
  return (
    <>
      {instIdList.map((id) => (
        <WorkInstance key={id} id={id} handleRemove={setInstIdList} />
      ))}
      <InstanceButton type="addNew" handleClick={setInstIdList} />
    </>
  );
}

function RespSection() {
  const [instIdList, setInstIdList] = useState([uuidv4()]);

  return (
    <>
      {instIdList.map((id) => (
        <RespInstance key={id} id={id} handleRemove={setInstIdList} />
      ))}
      <InstanceButton type="addNew" handleClick={setInstIdList} />
    </>
  );
}

function RespInstance() {}
export { WorkInstance, WorkSection };
