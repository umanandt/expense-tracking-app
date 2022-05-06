import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //const [userInput, setUserInput] = useState ({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  //});

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //  ...userInput,
    //   enteredTitle: e.target.value,
    // })
    //   setUserInput(()=>{
    //    return {...prevState, enteredTitle: e.target.value};
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    //  setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // })
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    //   setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.afterAddingData();
  };

  

  const cancelHandler = ()=>{
    props.onCancelHandle();

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={enteredDate}
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
