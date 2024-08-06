import React, { useState } from "react";
import TransactionsList from "./TransactionsList";


//Function to handle search and filetering of transactions
function Search({ transactions }) {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  const [categoryFilter, setCategoryFilter] = useState(""); // State to hold selected category

// Filter transactions based on description and category
const filteredTransactions = transactions.filter(transaction => {
  // Check if the transaction's description matches the search term & remove case restriction
  const matchesDescription = transaction.description.toLowerCase().includes(searchTerm.toLowerCase());

  // Check if the transaction's category matches the picked category filter 
  // If no category is selected (empty string), consider it a match
  const matchesCategory = categoryFilter === "" || transaction.category.toLowerCase() === categoryFilter.toLowerCase();

  // Return true if both the description and category match
  return matchesDescription && matchesCategory; 
});

  return (
    <div>
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder="Search your Recent Transactions by Description"
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
        />
        <i className="circular search link icon"></i>
      </div>
      <div>
        <select onChange={(e) => setCategoryFilter(e.target.value)} defaultValue="">
          <option value="">All Categories</option>
          <option value="Income">Income</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Gift">Gift</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Housing">Housing</option>
        </select>
      </div>
      {/* Render the filtered transactions */}
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default Search;

