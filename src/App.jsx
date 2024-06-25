import React from "react";
import { useState } from "react";
import "./App.css";
import Section from "./components/Section.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>CV Generator</h1>
      <Section title="General Information"></Section>
      <Section title="Educational Experience"></Section>
      <Section title="Professional Experience"></Section>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
