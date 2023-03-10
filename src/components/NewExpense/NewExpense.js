import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ userSubmit }) => {
  const [newExpense, setNewExpense] = useState(false);
  const addNewExpense = () => {
    setNewExpense((prevExpense) => !prevExpense);
  };
  return (
    <section className="new-expense">
      {!newExpense ? (
        <button onClick={addNewExpense}>Add New Expense</button>
      ) : (
        <ExpenseForm userSubmit={userSubmit} cancelExpense={addNewExpense} />
      )}
    </section>
  );
};
export default NewExpense;
