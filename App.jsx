import React from "react";
import Start from "./Start";
import Paper from "./Paper";

function App() {
  const [newUser, setNewUser] = React.useState(true);
  function handleClick() {
    setNewUser(false);
  }
  return <>{newUser ? <Start handleClick={handleClick} /> : <Paper />}</>;
}
export default App;
