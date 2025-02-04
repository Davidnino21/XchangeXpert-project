import { useState } from "react";
import "./App.css";

function App() {
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
              <option value="">EUR</option>
              <option value="">MXN</option>
              <option value="">ETH</option>
              <option value="">USD</option>
              <option value="">PKR</option>
              <option value="">CAD</option>
            </select>
            <select>
              <option value="">EUR</option>
              <option value="">MXN</option>
              <option value="">ETH</option>
              <option value="">USD</option>
              <option value="">PKR</option>
              <option value="">CAD</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
