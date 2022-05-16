import "./App.css";
import { useState } from "react";

function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operators = ["/", "*", "+", "-", "."];

    const updateCalc = (value) => {
        if (
            (operators.includes(value) && calc === "") ||
            (operators.includes(value) && operators.includes(calc.slice(-1)))
        ) {
            return;
        }

        setCalc(calc + value);

        if (!operators.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    };

    const calculate = () => {
        setCalc(eval(calc).toString());
    };

    const deleteLast = async () => {
        if (calc === "") {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
        if (value == "") {
            setResult("");
        }

        if (operators.includes(value.slice(-1))) {
            setResult(eval(value).toString().slice(0, -1));
        } else {
            setResult(eval(value).toString());
        }
    };

    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    {result ? <span>({result})</span> : ""}
                    {calc || "|"}
                </div>
                <div className="operators">
                    <button onClick={() => updateCalc("+")}>+</button>
                    <button onClick={() => updateCalc("-")}>-</button>
                    <button onClick={() => updateCalc("*")}>x</button>
                    <button onClick={() => updateCalc("/")}>/</button>
                    <button onClick={deleteLast}>DEL</button>
                    <button>CE</button>
                </div>
                <div className="digits">
                    <button onClick={() => updateCalc("1")}>1</button>
                    <button onClick={() => updateCalc("2")}>2</button>
                    <button onClick={() => updateCalc("3")}>3</button>
                    <button onClick={() => updateCalc("4")}>4</button>
                    <button onClick={() => updateCalc("5")}>5</button>
                    <button onClick={() => updateCalc("6")}>6</button>
                    <button onClick={() => updateCalc("7")}>7</button>
                    <button onClick={() => updateCalc("8")}>8</button>
                    <button onClick={() => updateCalc("9")}>9 </button>
                    <button onClick={() => updateCalc("0")}>0</button>
                    <button onClick={() => updateCalc(".")}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
}

export default App;
