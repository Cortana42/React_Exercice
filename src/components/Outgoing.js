import React from "react";

import OutgoingItems from "./OutgoingItems";
import "./Outgoing.css";

const Outgoing = (props) => {
  return (
    <div>
      <table className="tableau">
        <thead className="top">
          <tr>
            <th>Incoming</th>
            <th>Outgoing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salaire 2000 $</td>
          </tr>
          <tr>
            <td></td>
            <td className="depense">
              {props.items.map((outgoing) => (
                <OutgoingItems
                  key={outgoing.id}
                  expense={outgoing.expense}
                  amount={outgoing.amount}
                />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Outgoing;
