import React, {useState} from "react";

function App() {

  const [name, setName] = useState("");

  const [greeting, setGreeting] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setGreeting(name);
    event.preventDefault();
  }

  return (
    <div className="container">
    <form onSubmit={handleClick}>
      <h1>Hello {greeting} </h1>
      <input onChange={handleChange} type="text" value={name} placeholder="What's your name?" />
      <button type="submit" >Submit</button>
    </form>
    </div>
  );
}

export default App;
