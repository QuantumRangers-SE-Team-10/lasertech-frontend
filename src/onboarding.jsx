import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Onboarding = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the entered username using event.target.elements.username.value
    const username = event.target.elements.username.value;
    console.log("Submitted username:", username);
  };

  return (
    <div className="window">
      <div className="window-header">
        <h2>Player Onboarding</h2>
      </div>
      <div className="window-content">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Onboarding />
  </React.StrictMode>,
);