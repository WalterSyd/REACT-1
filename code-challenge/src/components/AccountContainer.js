import React from "react";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

// AccountContainer component that renders the TransactionsList and Search components received as props from the App function
function AccountContainer({ transactions, addTransaction }) {
  return (
    <div>

      {/* Form to add new transactions */}
      <AddTransactionForm addTransaction={addTransaction} />
      {/* Search component to filter transactions */}
      <Search transactions={transactions} />
  
     
    </div>
  );
}

export default AccountContainer;