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
    resp: [
      {
        id: uuidv4(),
        content: "",
      },
    ],
    startDate: "",
    endDate: "",
    currentStatus: "",
  });

  let parentSection = "work";
  const inputMap = Object.entries(workExp).reduce((accum, [key, value]) => {
    if (key !== "currentStatus") {
      accum.push(key);
    }
    return accum;
  }, []);

  let workFields;
  if (isCompleted) {
    workFields = (
      <ul className="work-instance">
        <li>Employer: {workExp.employerName}</li>
        <li>Position: {workExp.positionName}</li>
        <li>
          <h4>Responsibilities</h4>
          <ul className="resp-section">
            {workExp.resp.map((item) => (
              <li key={item.id}>{item.content}</li>
            ))}
          </ul>
        </li>
        <li>Start Date: {workExp.startDate}</li>
        <li>
          {workExp.currentStatus === "current"
            ? "Current employer"
            : "End Date: " + workExp.endDate}
        </li>
      </ul>
    );
  } else {
    workFields = (
      <div className="work-instance">
        {inputMap.map((subType) => {
          if (subType === "resp") {
            return <RespSection workExp={workExp} onChange={setWorkExp} />;
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

function RespSection({ workExp, onChange }) {
  /* 
add something that shows the instances as one <ul> when isCompleted
*/
  return (
    <>
      {workExp.resp.map((item) => (
        <RespInstance
          key={item.id}
          id={item.id}
          respItem={item.content}
          onChange={onChange}
        />
      ))}
      <InstanceButton type="addNew" context="item" handleClick={onChange} />
    </>
  );
}

function RespInstance({ respItem, id, onChange }) {
  let respField;
  respField = (
    <div className="resp-instance">
      <Input
        value={respItem}
        onChange={onChange}
        instanceId={id}
        type="text"
        subType="resp"
        parentSection="resp"
      />
    </div>
  );

  return (
    <>
      {respField}
      <div className="instance-buttons">
        <InstanceButton
          type="remove"
          context="item"
          instanceId={id}
          handleClick={onChange}
        />
      </div>
    </>
  );
}
export { WorkInstance, WorkSection };
