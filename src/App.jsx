import { useState, useEffect } from "react"; // Importing state hooks
import "./App.css"; // Importing Styles
const baseUrl = "https://v6.exchangerate-api.com/v6"; // Base API URL
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [currencies, setCurrencies] = useState([]); // State to store available currencies
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  useEffect(() => {
    fetch(`${baseUrl}/${apiKey}/codes`, {mode:"cors"})
      .then((response) => response.json())
      .then((data) => {
        {
          setCurrencies(
            data.supported_codes.map(([code]) => ({
              code,
            }))
          );
        }
      })
      .catch((error) => console.error("Error fetching currencies:", error));
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fromCurrency, toCurrency, fromValue]);

  const fetchRates = () => {
    if (fromCurrency && toCurrency && fromValue) {
      fetch(`${baseUrl}/${apiKey}/pair/${fromCurrency}/${toCurrency}`)
        .then((response) => response.json())
        .then((data) => {
          setToValue((fromValue * data.conversion_rate).toFixed(2));
        });
    }
  };

  return (
    <>
      <div>
        <div className="card">
          <h1>XchangeXpert</h1>
          <div className="amount">
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
            />
            <input
              type="number"
              value={toValue}
              onChange={(e) => setToValue(e.target.value)}
            />
          </div>
          <div>
            <h3>=</h3>
          </div>
          <div className="symbols">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default App; // Exporting App component
