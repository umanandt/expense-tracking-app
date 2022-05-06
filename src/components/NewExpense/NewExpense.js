import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import AddNewExpenseButton from "./AddNewExpenseButton";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelButton = () => {
    setMainForm(<AddNewExpenseButton clickAddExpense={handlingForm} />);
  };

  const afterAddingDataHandler = () =>{
    setMainForm(<AddNewExpenseButton clickAddExpense={handlingForm} />);
  }

  const handlingForm = () => {
    setMainForm(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelHandle={cancelButton}
        afterAddingData={afterAddingDataHandler}
      />
    );
  };

  const [mainForm, setMainForm] = useState(
    <AddNewExpenseButton clickAddExpense={handlingForm} />
  );

  return <div className="new-expense">{mainForm}</div>;
};
export default NewExpense;
