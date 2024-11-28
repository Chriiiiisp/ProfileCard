import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="Logos/avatar.jpg" alt="Christian Peñaflor" />
  );
}

function Intro() {
  return (
    <div className="body">
      <h1>Christian Peñaflor</h1>
      <p>
        3rd year BSIT student from STI College Fairview. When theres an extra
        time me and my Friends would love to take a trip to unwind in some
        coffee shops somewhere in Rizal, hiking mountains or relaxing in some
        beaches
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill language="Java" fontcolor="white" color="#f95959" />
      <Skill language="C#" fontcolor="white" color="#6b5b95" />
      <Skill language="SQL" fontcolor="white" color="#5585b5" />
      <Skill language="MONGODB" fontcolor="white" color="#42b883" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.language}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
