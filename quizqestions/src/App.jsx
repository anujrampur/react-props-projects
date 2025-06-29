import React from "react";
import Question from "./Question";

const questionData = [
  {
    question: "what is the capital of France?",
    optionA: "Berlin",
    optionB: "Madrid",
    optionC: "Paris",
    optionD: "London"
  },
  {
    question: "who wrote 'Romeo and Juliet'?",
    optionA: "Mark Twain",
    optionB: "William Shakespeare",
    optionC: "Charles Dickens",
    optionD: "Jane Austen"
  },
  {
    question: "what is the largest planet in our solar system?",
    optionA: "Earth",
    optionB: "Mars",
    optionC: "Jupiter",
    optionD: "Saturn"
  },
  {
    question: "what is the capital of India?",
    optionA: "New Delhi",
    optionB: "Kolkata",
    optionC: "Indore",
    optionD: "Madras"
  }
]; 

function App() {
  

  return (
    <>
      <div style={{padding:'20px'}}>
        <h1>Quiz</h1>
        {questionData.map((q, index) => (
          <Question
            key = {index}
            question = {q.question} 
            optionA = {q.optionA}
            optionB = {q.optionB}
            optionC = {q.optionC}
            optionD = {q.optionD}
            
          />
        ))}

      </div>
    </>
  );
}

export default App;
