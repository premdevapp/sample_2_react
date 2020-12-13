import React, { useState } from "react";
import Validate from "./components/validationComponent/validation";
import Char from "./components/charComponent/char";
import "./App.css";

function App() {
  const [valuechange, setValuechange] = useState({ userInput: "" });

  const inputChangeHandler = (event) => {
    setValuechange({ userInput: event.target.value });
  };

  const deleteCharHandler = (index) => {
    const text = valuechange.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    setValuechange({ userInput: updatedText });
  };

  const charList = valuechange.userInput.split("").map((ch, index) => {
    return (
      <Char
        character={ch}
        key={index}
        clicked={() => deleteCharHandler(index)}
      />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          onChange={inputChangeHandler}
          value={valuechange.userInput}
        />
        <p>The entered value is {valuechange.userInput}</p>
        <Validate textLength={valuechange.userInput.length} />
        {charList}
      </header>
    </div>
  );
}

export default App;
