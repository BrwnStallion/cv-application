import React from "react";
import { useState } from "react";
import { Input } from "./Input";

function GeneralInfo() {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <div className="general-info">
      <Input type="name" />
      <Input type="email" />
      <Input type="phone" />
    </div>
  );
}

export { GeneralInfo };
