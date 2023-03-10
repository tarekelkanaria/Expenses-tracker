import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const handleFilteredYear = (e) => {
    props.userFilteredYear(e.target.value);
  };
  return (
    <section className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleFilteredYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </section>
  );
};

export default ExpensesFilter;
