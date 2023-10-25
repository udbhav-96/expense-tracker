// src/components/AddExpense.js
import React, { useState } from 'react';

const AddExpense = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (!name || !amount) return;
    onAddExpense({ name, amount });
    setName('');
    setAmount('');
  };

  return (
    <div class="text-center">
      <input
        class="form-control my-2"
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        class="form-control my-2"
        type="tele"
        placeholder="Expense Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button class="btn btn-primary mb-2 btn-sm" onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default AddExpense;
