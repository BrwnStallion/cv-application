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
        <Input value={generalInfo.name} setValue={setGeneralInfo} type="name" />
        <Input
          value={generalInfo.email}
          setValue={setGeneralInfo}
          type="email"
        />
        <Input
          value={generalInfo.phone}
          setValue={setGeneralInfo}
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
          setState={setIsCompleted}
        />
        <InstanceButton type="remove" />
      </div>
    </>
  );
}

export { GeneralInfo };
