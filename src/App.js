// src/App.js
import React, { useState } from 'react';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import './css/style.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div class="text-center">
      <h1>Expense Tracker</h1>
      <AddExpense onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
