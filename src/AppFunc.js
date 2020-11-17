import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/fbinstant.6.2.js";
    script.id = "fbinstant";
    document.body.append(script);
    script.onload = () => {
      window.FBInstant.initializeAsync().then(function () {
        // Now that assets are loaded, call startGameAsync
        window.FBInstant.startGameAsync().then();
      });
    };
  }, []);

  return (
    <div className="App">
      <h1>Hi, it is my first app!</h1>
      <div className="container"></div>
    </div>
  );
}

export default App;
