import React, { useEffect, useRef } from "react";
import "./App.css";
import lottie from "lottie-web";

function AppFunc() {
  const container = useRef(null);
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
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./lottie/mobileTechnology.json"),
    });
  }, []);

  return (
    <div className="App">
      <h1>React Lottie</h1>
      <div className="container" ref={container}></div>
    </div>
  );
}

export default AppFunc;
