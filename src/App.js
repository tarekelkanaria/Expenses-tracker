import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import ExpensesList from "./components/Expenses/ExpensesList";
import ExpenseChart from "./components/Expenses/ExpenseChart";
function App() {
  const [itemsData, setItemsData] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem("itemsData")) || [];
    const savedItemsDataConverted = savedItems.map((item) => ({
      ...item,
      date: new Date(item.date.substring(0, 10)),
    }));
    return savedItemsDataConverted;
  });

  const [filteredYear, setFilteredYear] = useState("2023");

  const userInput = (inputData) => {
    inputData.id = nanoid();
    if (inputData.title && inputData.date && inputData.amount) {
      setItemsData((prevData) => [inputData, ...prevData]);
    }
  };

  useEffect(() => {
    localStorage.setItem("itemsData", JSON.stringify(itemsData));
    if (!itemsData.length) localStorage.removeItem("itemsData");
  }, [itemsData]);

  useEffect(() => {
    document.title = "Expenses Tracker";
  }, []);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredYearsList = itemsData.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const deleteExpense = (e, itemId) => {
    setItemsData((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <main>
      <NewExpense userSubmit={userInput} />
      <ExpensesFilter
        selected={filteredYear}
        userFilteredYear={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredYearsList} />
      <Expenses>
        <ExpensesList items={filteredYearsList} remove={deleteExpense} />
      </Expenses>
    </main>
  );
}

export default App;
