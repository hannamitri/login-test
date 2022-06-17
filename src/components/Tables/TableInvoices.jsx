import React from "react";

const TableInvoices = () => {
  const invoices = [
    {
      id: "RT3080",
      date: "Due 19 Aug 2021",
      name: "Jensen Huang",
      amount: "$1,000.90",
      status: "Paid",
    },
    {
      id: "RT3080",
      date: "Due 19 Aug 2021",
      name: "Jensen Huang",
      amount: "$1,000.90",
      status: "Paid",
    },
    {
      id: "RT3080",
      date: "Due 19 Aug 2021",
      name: "Jensen Huang",
      amount: "$1,000.90",
      status: "Paid",
    },
    {
      id: "RT3080",
      date: "Due 19 Aug 2021",
      name: "Jensen Huang",
      amount: "$1,000.90",
      status: "Paid",
    },
    {
      id: "RT3080",
      date: "Due 19 Aug 2021",
      name: "Jensen Huang",
      amount: "$1,000.90",
      status: "Paid",
    },
    {
      id: "RT3080",
      date: "Due 19 Aug 2021",
      name: "Jensen Huang",
      amount: "$1,000.90",
      status: "Paid",
    },
    {
      id: "RT3080",
      date: "Due 19 Aug 2021",
      name: "Jensen Huang",
      amount: "$1,000.90",
      status: "Paid",
    },
  ];

  return (
    <div className="table__background">
      <table cellspacing="0" className="table__wrapper">
        {invoices.map(({ id, date, name, amount, status }, index) => (
          <tr key={index} className="table__row">
            <td>{id}</td>
            <td>{date}</td>
            <td>{name}</td>
            <td>{amount}</td>
            <td className="table__status">{status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableInvoices;
