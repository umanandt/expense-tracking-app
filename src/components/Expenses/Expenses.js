import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./expenses.css";


function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2019");
  const yearWiseData = (choosenYear) => {
    setEnteredYear(choosenYear);
  };

  const filteredExpenses = props.items.filter((yearr) => {
    return yearr.date.getFullYear().toString() === enteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={enteredYear} toHandleYear={yearWiseData} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList filteredExpensesData={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
