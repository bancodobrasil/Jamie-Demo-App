import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    async function fetchMenus() {
      const response = await axios.get("http://localhost:8000/api/menus", {});
      setMenus(response.data);
      setTimeout(fetchMenus, 5000);
    }
    fetchMenus();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div class="menu">
          <h1>Menus</h1>
          <ul>
            {menus.map((menu) => (
              <li key={menu.id}>
                <h2>{menu.name}</h2>
                <ul>
                  {menu.items.map((item) => (
                    <li key={item.name}>{item.name}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
