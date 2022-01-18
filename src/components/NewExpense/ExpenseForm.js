import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredExpense, setEnteredExpense] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredExpense: "",
  //   enteredAmount: "",
  // });

  const expenseChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredExpense: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {...prevState, enteredExpense: event.target.value};
    setEnteredExpense(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      expense: enteredExpense,
      amount: enteredAmount,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredExpense("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredExpense}
            onChange={expenseChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
