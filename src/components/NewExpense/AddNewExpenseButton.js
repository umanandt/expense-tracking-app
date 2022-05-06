import React from "react";

import "./ExpenseForm.css";

const AddNewExpenseButton = (props) => {
  const addExpenseButtonHadnler = (e) => {
     e.preventDefault(); 
    props.clickAddExpense();

  };

  return (
    <form onSubmit={addExpenseButtonHadnler}>
      <button type="submit">Add New Expense</button>
    </form>
  );
};

export default AddNewExpenseButton;
