// import React from "react";
// import "./transaction.css";

// const Transaction = ({ type, amount, currency }) => {
//   return (
//     <tr>
//       <td>{type}</td>
//       <td>{amount}</td>
//       <td>{currency}</td>
//     </tr>
//   );
// };

// export default Transaction;

import React from "react";
import styles from "./transaction.module.css";

const Transaction = ({ type, amount, currency, isEven }) => {
  return (
    <tr className={isEven ? styles.trEven : ""}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default Transaction;
