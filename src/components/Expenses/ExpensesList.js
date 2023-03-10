import "./ExpensesList.css";
import ExpensesItem from "./ExpensesItem";
const ExpensesList = ({ items, remove }) => {
  const fallback = (
    <h2 className="expenses-list__fallback">No Expenses Found.</h2>
  );
  return (
    <ul className="expenses-list">
      <ExpensesItem items={items} fallback={fallback} remove={remove} />
    </ul>
  );
};
export default ExpensesList;
