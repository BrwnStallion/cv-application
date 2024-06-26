import React from "react";
import { useState } from "react";

function Input({ value, setValue, type, subType, parentSection }) {
  /* 
  type: name, email, phone, text, date, checkbox
  subType: school, degreeType, degreeName, employer, position, resp, startDate,
  endDate
  parentSection: school, work
  */

  function handleChange() {
    // setValue({...})
  }

  const labelAttributes = {
    for: type,
    content: "",
  };
  const inputAttributes = {
    type: type,
    id: type,
    name: type,
    value: value,
    onChange: "",
  };

  switch (type) {
    case "name":
      labelAttributes.content = "Full Name";
      inputAttributes.type = "text";
      break;
    case "email":
      labelAttributes.content = "Email";
      break;
    case "phone":
      labelAttributes.content = "Phone Number";
      inputAttributes.type = "tel";
      break;
    case "text":
      labelAttributes.for = subType;
      labelAttributes.content = "";
      inputAttributes.id = subType;
      inputAttributes.name = subType;
      break;
    case "date":
      labelAttributes.for = subType;
      labelAttributes.content =
        subType === "startDate" ? "Start Date" : "Completion Date";
      inputAttributes.type = "text";
      inputAttributes.id = subType;
      inputAttributes.name = subType;
      break;
    case "checkbox":
      labelAttributes.for = "current";
      labelAttributes.content = `Current ${
        parentSection === "school" ? "School" : "Employer"
      }`;
      inputAttributes.id = "current";
      inputAttributes.name = "current";
      break;
  }

  const label = (
    <label for={labelAttributes.for}>{labelAttributes.content}</label>
  );
  const input = (
    <input
      type={inputAttributes.type}
      id={inputAttributes.id}
      name={inputAttributes.name}
      value={inputAttributes.value}
      onChange={handleChange}
    ></input>
  );

  let inputControl =
    type === "checkbox" ? (
      <>
        {input}
        {label}
      </>
    ) : (
      <>
        {label}
        {input}
      </>
    );

  return (
    <>
      <div className={"input " + type}>{inputControl}</div>
    </>
  );
  /* 
  Types of Input Controls Req'd
    - name
    - email
    - phone number
    - text (school, work, titles, etc.)
    - dates (started, completed)
    - checkbox (currently studying/employed)
  */
}

export { Input };
