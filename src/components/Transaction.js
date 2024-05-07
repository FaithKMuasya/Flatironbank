import React from "react";

function Transaction({ transaction, onDelete }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
{/* <td>{transaction.action}</td> */}
<td>{transaction.amount}</td>
      <td>
        <button className="delete-btn" onClick={() => onDelete(transaction.id)}>
          <i className="fas fa-trash-alt"></i> Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;