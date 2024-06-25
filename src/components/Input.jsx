import React from "react";
import { useState } from "react";

function Input({ type }) {
  return (
    <>
      <label>Test</label>
      <input type="text"></input>
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
