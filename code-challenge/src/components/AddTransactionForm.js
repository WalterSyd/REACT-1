import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData((prevData) => ({ ...prevData, [name]: value })); // Update state with new input value
  };
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    addTransaction(formData); // Call the function to add a transaction
    setFormData({ date: "", description: "", category: "", amount: "" }); // Reset form fields to empty strings once data has been submitted for add
  };

  return (
    // includes a form with 4 input fields and attached relevant event listeners for both form and input
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange} value={formData.date} required />
          <input type="text" name="description" placeholder="Description" onChange={handleChange} value={formData.description} required />
          <input type="text" name="category" placeholder="Category" onChange={handleChange} value={formData.category} required />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleChange} value={formData.amount} required />
        </div>
        <button className="ui button" type="submit" >Add Transaction </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;