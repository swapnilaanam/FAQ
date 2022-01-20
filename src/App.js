import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <section id="accordinBody" className="container bg-white rounded">
        <div id="questionHeader">
          <h3>Questions And Answers About Login</h3>
        </div>
        <div id="questions">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}/>;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
