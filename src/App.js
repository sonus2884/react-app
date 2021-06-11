import React, { useState } from 'react';
import ExpensesFilter from './components/ExpenseFilter/ExpensesFilter';
import ExpensesList from './components/Expenses/ExpensesList';
import NewExpense from './components/NewExpense/NewExpense'
import Card from './components/UI/Card';

import "./components/Expenses/Expense.css"

const App = () => {

  const [filteredYear, setFilteredYear] = useState('2020');
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {

    //console.log("App js", expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }

  const filterChangeHandler = (selectedYear) => {
    // console.log(typeof (expenses[0].date.getFullYear().toString()), typeof (selectedYear));
    setFilteredYear(selectedYear);
    console.log(expenses.filter((fileteredExp) => fileteredExp.date.getFullYear() === selectedYear));
  }

  const filteredExp = expenses.filter((filExp) => {
    return filExp.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selectedYear={filteredYear} />

        <ExpensesList item={filteredExp} />

      </Card>

    </div>
  );
}

export default App;
