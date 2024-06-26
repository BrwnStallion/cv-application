import React from "react";
import { useState } from "react";

function Input({ type, subType, parentSection }) {
  /* 
  type: name, email, phone, text, date, checkbox
  subType: school, degreeType, degreeName, employer, position, resp, startDate,
  endDate
  parentSection: school, work
  */
  let inputControl;
  switch (type) {
    case "name":
      inputControl = (
        <>
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name"></input>
        </>
      );
      break;
    case "email":
      inputControl = (
        <>
          <label for="email">Email</label>
          <input type="email" id="email" name="email"></input>
        </>
      );
      break;
    case "phone":
      inputControl = (
        <>
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone"></input>
        </>
      );
      break;
    case "text":
      inputControl = (
        <>
          <label for={subType}></label>
          <input type="text" id={subType} name={subType}></input>
        </>
      );
      break;
    case "date":
      inputControl = (
        <>
          <label for={subType}>
            {subType === "startDate" ? "Start Date" : "Completion Date"}
          </label>
          <input type="text" id={subType} name={subType}></input>
        </>
      );
      break;
    case "checkbox":
      inputControl = (
        <>
          <input
            type="checkbox"
            id="current"
            name="current"
            value="current"
          ></input>
          <label for="current">
            Current {parentSection === "school" ? "School" : "Employer"}
          </label>
        </>
      );
      break;
  }
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
