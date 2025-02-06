import { useState, useEffect } from "react"; // Importing state hooks
import "./App.css"; // Importing Styles
const baseUrl = "https://api.currencyfreaks.com/v2.0"; // Base API URL

function App() {
  const [currencies, setCurrencies] = useState([]); // State to store available currencies

  useEffect(() => {
    // Fetching supported currencies from the API when the component mounts
    fetch(`${baseUrl}/supported-currencies`)
      .then((response) => response.json()) // Converting response to JSON
      .then((data) => {
        // Filtering available currencies and updating state
        setCurrencies(
          Object.values(data.supportedCurrenciesMap).filter(
            (c) => c.status === "AVAILABLE"
          )
        );
      })
      .catch((error) => console.error("Error fetching currencies:", error)); // Handles potential errors
  }, []); // Empty dependency array ensures useEffect runs only once on mount

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

export default App; // Exporting App component
