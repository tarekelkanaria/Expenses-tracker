import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ userSubmit, cancelExpense }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const handleTitle = (e) => {
    setExpense((prevTitle) => ({ ...prevTitle, title: e.target.value }));
  };
  const handleAmount = (e) => {
    setExpense((prevAmount) => ({ ...prevAmount, amount: e.target.value }));
  };
  const handleDate = (e) => {
    setExpense((prevDate) => ({ ...prevDate, date: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: expense.title,
      amount: expense.amount,
      date: new Date(expense.date),
    };
    userSubmit(expenseData);
    setExpense((prevExpense) => ({
      ...prevExpense,
      title: "",
      amount: "",
      date: "",
    }));
  };
  const handelCancel = (e) => {
    e.preventDefault();
    setExpense((prevExpense) => ({
      ...prevExpense,
      title: "",
      amount: "",
      date: "",
    }));
    cancelExpense();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={expense.title} onChange={handleTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expense.amount}
            onChange={handleAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={expense.date}
            onChange={handleDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={handelCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
