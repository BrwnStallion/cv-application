import React from "react";
import { useState } from "react";
import "./App.css";
import Section from "./components/Section.jsx";
import { Input } from "./components/Input.jsx";

function App() {
  const [count, setCount] = useState(0);

  const sectionInfo = [
    {
      id: 1,
      title: "General Information",
      inputForms: 3,
      types: ["text", "email", "phone"],
    },
    {
      id: 2,
      title: "Educational Experience",
      inputForms: 4,
      types: ["text", "text", "text", "date"],
    },
    {
      id: 3,
      title: "Professional Experience",
      inputForms: 5,
      types: ["text", "text", "text", "date", "date"],
    },
  ];

  return (
    <>
      <h1>CV Generator</h1>
      <div className="sections">
        {sectionInfo.map((section) => (
          <Section key={section.id} title={section.title}>
            {section.types.map((type, index) => (
              <Input key={index} type={type} />
            ))}
          </Section>
        ))}
      </div>
      <Section title={sectionInfo[0].title}>
        {/* 
        name, email, phone number
        */}
      </Section>
      <Section title="Educational Experience">
        {/* school, degree, title of study, date completed */}
        {/* include functionality for adding more */}
      </Section>
      <Section title="Professional Experience">
        {/* employer, position, responsibilities (add functionality for adding more, date started, date completed (or current) */}
      </Section>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
