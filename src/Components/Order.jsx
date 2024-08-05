/* eslint-disable no-unused-vars */
// src/components/Order.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Order = () => {
  return (
    <div>
      <div>
        <div className="app-container h-screen w-screen flex">
          <div className="sidebar h-full w-1/5">
            <Sidebar />
          </div>
          <div className="headerBar h-24 w-4/5 ">
            <div>
              <Header />
            </div>
            <h2 className="text-xl font-bold mb-4">Order</h2>
            {/* Add Order content here */}
          </div>
        </div>
      </div>

      {/* Add Ecommerce content here */}
    </div>
  );
};

export default Order;
