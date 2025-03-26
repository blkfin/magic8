import "./styles.css";
import { useState } from "react";

const responses = ["Yes", "No", "Maybe"];

export default function App() {
  const [answer, setAnswer] = useState("");
  const getAnswer = () => setAnswer(responses[Math.floor(Math.random() * 3)]);

  return (
    <div className="App">
      <button onClick={getAnswer}>Ask</button>
      <p>{answer}</p>
    </div>
  );
}
