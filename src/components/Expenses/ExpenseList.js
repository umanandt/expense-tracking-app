import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expensesContent = <p>No expenses found</p>;

  if (props.filteredExpensesData.length === 0) {
    return <h2 className="expenses-list__fallback">{expensesContent}</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpensesData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
