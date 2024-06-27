import React from "react";
import { useState } from "react";
import "./App.css";
import Section from "./components/Section.jsx";
import { GeneralInfo } from "./components/General.jsx";
import { SchoolSection } from "./components/School.jsx";
import { WorkSection } from "./components/Work.jsx";

function App() {
  return (
    <>
      <h1>CV Generator</h1>
      <Section title="General Information">
        <GeneralInfo />
      </Section>
      <Section title="Educational Experience">
        <SchoolSection />
      </Section>
      <Section title="Professional Experience">
        <WorkSection />
      </Section>
    </>
  );
}

export default App;
