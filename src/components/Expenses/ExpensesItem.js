import { AiFillCloseCircle } from "react-icons/ai";
import "./ExpensesItem.css";
const ExpensesItem = ({ items, fallback, remove }) => {
  const handleDelete = (e, itemId) => {
    remove(e, itemId);
  };

  const itemsElements = !items.length
    ? fallback
    : items.map((item) => {
        return (
          <li key={item.id} className="expense-item">
            <div className="expense-date">
              <h3 className="expense-date__month">
                {item.date.toLocaleString("en-US", { month: "long" })}
              </h3>
              <h3 className="expense-date__year">{item.date.getFullYear()}</h3>
              <h3 className="expense-date__day">
                {item.date.toLocaleString("en-US", { day: "2-digit" })}
              </h3>
            </div>
            <div className="expense-item__description">
              <h2>{item.title}</h2>
              <div className="expense-item__price">${item.amount}</div>
              <div
                className="expense-item__close"
                onClick={(e) => handleDelete(e, item.id)}
              >
                <AiFillCloseCircle />
              </div>
            </div>
          </li>
        );
      });

  return <>{itemsElements}</>;
};

export default ExpensesItem;
