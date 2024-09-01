// import React from "react";
// import Transaction from "../Transaction/transaction";
// import "./transactionHistory.css";

// const TransactionHistory = ({ items }) => {
//   return (
//     <div className="table-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Amount</th>
//             <th>Currency</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((transaction) => (
//             <Transaction
//               key={transaction.id}
//               type={transaction.type}
//               amount={transaction.amount}
//               currency={transaction.currency}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TransactionHistory;

import React from "react";
import styles from "./transactionHistory.module.css";
import Transaction from "../Transaction/transaction";

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((transaction, index) => (
            <Transaction
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
              isEven={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
