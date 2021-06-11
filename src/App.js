import React from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {

  const expense = [{
    date: new Date(2019, 5, 12)
  }];

  const addExpenseHandler = (expense) =>{

    console.log("App js", expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseItem date={expense[0].date} />

    </div>
  );
}

export default App;
