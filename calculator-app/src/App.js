import './App.css';
import CalcButton from'./components/CalcButton';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState("")
  
  const handleInput = (symbol) => {
    /**
     * @param {string} symbol - input to the calculator
     *                          can be { 0-9, +,-,*,/, =, C, AC }
     */
    console.log("handleInput");
    if (!isNaN(symbol)) {
      // symbol is a number
      if (display || symbol !== "0") {
        // if sending 0 to empty display, we don't change it
        console.log("digit: " + symbol)
        if (display.length < 8) {
          // display can handle max of 8 digits
          setDisplay(display + symbol);
        }
      }
    }
    else if (symbol === "C") {
      console.log("clear")
      setDisplay("")
    }
  }
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  return (
    <div style={{justifyContent: "center", backgroundColor: "#282c34", minHeight: "100vh", fontSize: "calc(10px + 2vmin)", color: "white"}}>
      <div style={{ width: "8ch", textAlign: "right" }}>
        <code>{display ? display : "0"}</code>
      </div>
      {digits.map(digit => <CalcButton text={digit} dimensions={["50px", "50px"]} handleClick={handleInput} /> )}
      <CalcButton text={"C"} dimensions={["50px", "50px"]} handleClick={handleInput} />
    </div>
  );
}

export default App;
