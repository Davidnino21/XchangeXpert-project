import { useState, useEffect } from "react";
import "./App.css";
const baseUrl = "https://api.currencyfreaks.com/v2.0";

function App() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/supported-currencies`)
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(
          Object.values(data.supportedCurrenciesMap).filter(
            (c) => c.status === "AVAILABLE"
          )
        );
      });
  }, []);

  return (
    <>
      <div>
        <div className="card">
          <h1>XchangeXpert</h1>
          <div className="amount">
            <input type="number" />
            <input type="number" />
          </div>
          <div>
            <h3>=</h3>
          </div>
          <div className="symbols">
            <select>
              {currencies.map((c) => (
                <option key={c.currencyCode} value={c.currencyCode}>
                  {c.currencyCode}
                </option>
              ))}
            </select>
            <select>
              {currencies.map((c) => (
                <option key={c.currencyCode} value={c.currencyCode}>
                  {c.currencyCode}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
