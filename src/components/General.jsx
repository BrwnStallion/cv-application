import React from "react";
import { useState } from "react";
import { Input } from "./Input";
import { InstanceButton } from "./Button";

function GeneralInfo() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  let generalFields;
  if (isCompleted) {
    generalFields = (
      <ul className="general-info">
        <li>Name: {generalInfo.name}</li>
        <li>Email: {generalInfo.email}</li>
        <li>Phone Number: {generalInfo.phone}</li>
      </ul>
    );
  } else {
    generalFields = (
      <div className="general-info">
        <Input value={generalInfo.name} onChange={setGeneralInfo} type="name" />
        <Input
          value={generalInfo.email}
          onChange={setGeneralInfo}
          type="email"
        />
        <Input
          value={generalInfo.phone}
          onChange={setGeneralInfo}
          type="phone"
        />
      </div>
    );
  }
  return (
    <>
      {generalFields}
      <div className="section-buttons">
        <InstanceButton
          type="completeEdit"
          completeState={isCompleted}
          handleClick={setIsCompleted}
        />
      </div>
    </>
  );
}

export { GeneralInfo };
