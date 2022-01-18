import { useState } from "react/cjs/react.development";
import NewExpense from "./components/NewExpense/NewExpense";
import Outgoing from "./components/Outgoing";

const DATA_EXAMPLES = [
  {
    id: "e1",
    expense: "Papier Toillette",
    amount: 5,
  },
  {
    id: "e2",
    expense: "Ticket cinéma",
    amount: 10,
  },
  {
    id: "e3",
    expense: "Abonnement Spotify",
    amount: 15,
  },
  {
    id: "e4",
    expense: "Abonnement SFR",
    amount: 25,
  },
];

// let result = total + expe.amount;
// console.log(result);

const App = () => {
  const [outgoings, setOutgoings] = useState(DATA_EXAMPLES);

  const AddExpenseHandler = (outgoing) => {
    setOutgoings((prevOutgoings) => {
      return [outgoing, ...prevOutgoings];
    });
  };

  // const AddTotalHandler = (outgoing) => {
  //   let totalPrevExpense = DATA_EXAMPLES.map((item) => item.amount).reduce(
  //     (prev, curr) => prev + curr,
  //     0
  //   );

  //   let newExpense = Number(outgoing.amount);

  //   let total = totalPrevExpense + newExpense;

  //   console.log(total);
  // }; (en cours)

  return (
    <div>
      <NewExpense onAddExpenseData={AddExpenseHandler} />
      <Outgoing items={outgoings} />
      {/* <NewTotal onAddTotal={AddTotalHandler} /> en cours */}
    </div>
  );
};

export default App;
