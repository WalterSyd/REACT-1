import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  // use State to hold the initial list of transactions from the Db.json
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
   // Async function to fetch transaction data from the server by using the fetch API endpoint & updates the state
    const fetchTransactions = async () => {
      const response = await fetch("http://localhost:8001/transactions");
      const data = await response.json();
      setTransactions(data);
    };
       // Call the fetch function to get the transactions rendered
    fetchTransactions();
  }, []);// Empty dependency array that renders the effect runs once on load


   // Function that handles the POST request to add a new transaction
   const addTransaction = async (newTransaction) => {
    // Make a POST request to add the new transaction
    const response = await fetch("http://localhost:8001/transactions", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction), 
    });
  
    // Wait for the response from the server and convert it to JSON format
    const savedTransaction = await response.json();
  
    // Update the state to include the newly saved transaction
    setTransactions((prevTransactions) => [
      ...prevTransactions, // Spread the existing transactions
      savedTransaction, // Add the newly saved transaction to the array
    ]);
  };
   // Render the component with the the AccountContainer component
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer transactions={transactions} addTransaction={addTransaction} />
    </div>
  );
}

export default App;