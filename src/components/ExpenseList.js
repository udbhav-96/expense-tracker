// src/components/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div class="expenses-list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name} <span> ₹{expense.amount} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
