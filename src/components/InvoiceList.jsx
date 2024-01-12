import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaTrash } from "react-icons/fa";

export function InvoiceList({ invoices }) {
  const [items, setItems] = useState([]);

  const addNewItem = () => {
    setItems((prev) => {
      return [
        ...prev,
        {
          id: Math.random() * new Date(),
          text: `Item ${items.length + 1}`,
        },
      ];
    });
  };

  const handleDelete = (id) => {
    setItems((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mt-3 font-bold text-3xl">Invoices</h2>
          <p>There are 7 total invoices</p>
        </div>
        <div className="flex items-center gap-3">
          <p>Filter by status</p>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn bg-dark-slate-blue text-white pt-3 pb-3 pl-4 pr-4 rounded-[24px] drawer-button"
              >
                New Invoice
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu rounded-r-[14px] p-[56px] w-auto min-h-full bg-base-200 text-base-content">
                <li>
                  <h2 className="font-bold">New Invoice</h2>
                </li>
                <li>
                  <p className="text-indigo-600">Bill From</p>
                </li>
                <li>
                  <p>Street Address</p>
                  <input type="text" className="input input-bordered w-full" />
                </li>
                <li>
                  <div className="mt-11">
                    <div>
                      <p>City</p>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-5xl"
                      />
                    </div>
                    <div>
                      <p>Past Code</p>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div>
                      <p>Country</p>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <p className="text-indigo-600">Bill To</p>
                </li>
                <li>
                  <p>Client's Name</p>
                  <input type="text" className="input input-bordered w-full" />
                </li>
                <li>
                  <p>Client's Email</p>
                  <input type="text" className="input input-bordered w-full" />
                </li>
                <li>
                  <p>Street Address</p>
                  <input type="text" className="input input-bordered w-full" />
                </li>
                <li>
                  <div className="mt-11">
                    <div>
                      <p>City</p>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-5xl"
                      />
                    </div>
                    <div>
                      <p>Past Code</p>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div>
                      <p>Country</p>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <p>Invoice Date</p>
                  <input
                    type="Date"
                    className="input justify-between input-bordered w-full "
                  />
                </li>
                <li>
                  <p>Payment Terms</p>
                  <details className="dropdown">
                    <summary className="m-1 btn">Net 1 Days</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <a>Net 1 Days</a>
                      </li>
                      <li>
                        <a>Net 7 Days</a>
                      </li>
                      <li>
                        <a>Net 14 Days</a>
                      </li>
                      <li>
                        <a>Net 30 Days</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <p>Project Description</p>
                  <input type="text" className="input input-bordered w-full " />
                </li>

                <h2 className="mt-6 mb-6">Item List</h2>

                {items.map((item) => {
                  return (
                    <li key={item.id}>
                      {
                        <li>
                          <div>
                            <div>
                              <p>Item Name</p>
                              <input
                                type="text"
                                className="input justify-between input-bordered w-full max-w-xs"
                              />
                            </div>
                            <div>
                              <p>QTY</p>
                              <input
                                type="text"
                                className="input justify-between input-bordered w-full max-w-xs"
                              />
                            </div>
                            <div>
                              <p>Price</p>
                              <input
                                type="text"
                                className="input justify-between input-bordered w-full max-w-xs"
                              />
                            </div>
                            <div>
                              <p>total</p>
                              <p>0000</p>
                            </div>
                            <button onClick={() => handleDelete(item.id)}>
                              <FaTrash />
                            </button>
                          </div>
                        </li>
                      }
                    </li>
                  );
                })}

                <button
                  onClick={addNewItem}
                  className="btn btn-primary rounded-3xl text-white mt-6"
                >
                  + Add Item
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="justify-between mt-6 pb-3 text-center">
        {invoices.map((invoice) => {
          const { id, clientName, total, status, paymentDue } = invoice;
          return (
            <li key={id}>
              <Link to={`invoice/${id}`}>
                #{id}
                Due {paymentDue}
                {clientName}£{total}
                {status}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
