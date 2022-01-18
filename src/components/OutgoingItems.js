import React from "react";

const OutgoingItems = (props) => {
  return (
    <div>
      <div>
        {props.expense} : {props.amount} $
      </div>
    </div>
  );
};

export default OutgoingItems;
