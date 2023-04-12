import React, { useState } from "react";

const Counter = () => {
  const [temp, setTemp] = useState(24);

  const handleIncrement = () => {
    setTemp((perviousTemp) => perviousTemp + 1);
  };

  const handleDecrement = () => {
    setTemp((perviousTemp) => perviousTemp - 1);
  };

  const bgcolor = () => {
    if (temp < 9) {
      return "aqua";
    } else if (temp < 25) {
      return "lime";
    } else {
      return "red";
    }
  };

  return (
    <div
      style={{
        backgroundColor: bgcolor(),
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            border: "1px solid black",
            padding: "60px",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        >
          {" "}
          
          {temp}<sup>0</sup>c
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100px",
          }}
        >
          <button
            style={{
              padding: "10px",
              borderRadius: "40%",
            }}
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            style={{
              padding: "10px",
              borderRadius: "40%",
            }}
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
