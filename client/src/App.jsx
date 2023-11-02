import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("es");

  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState({});

  async function handleTranslate(event) {
    event.preventDefault();
    const API = `http://localhost:8080/translate?word=${word}&from=${from}&to=${to}`;
    const res = await axios.get(API);
    setTranslation(res.data);
  }

  return (
    <>
      <header>
        <h1>TranslaTim</h1>
      </header>
      <form onSubmit={handleTranslate}>
        <input
          placeholder="Type here..."
          onChange={(event) => setWord(event.target.value)}
          className="input"
        />

        <div className="languages">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>

          <select onChange={(event) => setTo(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
        </div>

        <div className="output">{translation.translation}</div>

        <button className="button">Submit</button>
      </form>
    </>
  );
}

export default App;
