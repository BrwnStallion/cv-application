import React from "react";
import { useState } from "react";

function Input({ value, onChange, type, subType, parentSection }) {
  /* 
  type: name, email, phone, text, date, checkbox
  subType: school, degreeType, degreeName, employer, position, resp, startDate,
  endDate
  parentSection: school, work
  */

  const updateValue = (e) => {
    const newValue = e.target.value;
    onChange((prevValues) => ({ ...prevValues, [type]: newValue }));
  };

  const labelAttributes = {
    forAttr: type,
    content: "",
  };
  const inputAttributes = {
    type: type,
    id: type,
    name: type,
    value: value,
    onChange: "",
  };
  // Lookup for the various subType 'text' type input fields
  const textLabelContent = {
    school: "School Name",
    degreeType: "Degree Type",
    degreeName: "Degree Name",
    employer: "Employer",
    position: "Position",
    resp: "Responsibility",
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
      labelAttributes.forAttr = subType;
      labelAttributes.content = textLabelContent[subType];
      inputAttributes.id = subType;
      inputAttributes.name = subType;
      break;
    case "date":
      labelAttributes.forAttr = subType;
      labelAttributes.content =
        subType === "startDate" ? "Start Date" : "Completion Date";
      inputAttributes.type = "text";
      inputAttributes.id = subType;
      inputAttributes.name = subType;
      break;
    case "checkbox":
      labelAttributes.forAttr = "current";
      labelAttributes.content = `Current ${
        parentSection === "school" ? "School" : "Employer"
      }`;
      inputAttributes.id = "current";
      inputAttributes.name = "current";
      break;
  }

  const label = (
    <label htmlFor={labelAttributes.forAttr}>{labelAttributes.content}</label>
  );
  const input = (
    <input
      type={inputAttributes.type}
      id={inputAttributes.id}
      name={inputAttributes.name}
      value={inputAttributes.value}
      onChange={updateValue}
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
