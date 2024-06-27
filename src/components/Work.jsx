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
    resp: {},
    startDate: "",
    endDate: "",
    currentStatus: "",
  });

  let parentSection = "work";
  const inputMap = Object.entries(workExp).reduce((accum, [key, value]) => {
    if (key != "currentStatus") {
      accum.push(key);
    }
    return accum;
  }, []);

  let workFields;
  if (isCompleted) {
    <p></p>;
  } else {
    workFields = (
      <div className="work-instance">
        {inputMap.map((subType) => {
          if (subType === "resp") {
            // instantiate resp
          } else {
            return (
              <Input
                key={subType}
                value={workExp[subType]}
                onChange={setWorkExp}
                type={
                  subType === "endDate" || subType === "startDate"
                    ? "date"
                    : "text"
                }
                subType={subType}
                parentSection={parentSection}
              />
            );
          }
        })}
        <Input type="checkbox" parentSection={parentSection} />
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
