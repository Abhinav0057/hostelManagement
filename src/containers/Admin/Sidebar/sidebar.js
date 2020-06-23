import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <h3 className="f3 tc">Admin Panel</h3>
      <hr className="my-4" />
      <ul className="sidebar">
        <li>
          <div className="dib">
            <i className="tl fas  fa-book pa3 fa-2x"></i>
            <span className="f3 pa1">Complaints</span>
          </div>
        </li>
        <li>
          <div className="dib">
            <i className="tl fas fa-dollar-sign  fa-2x pa3"></i>
            <span className="f3 pa1">Earnings</span>
          </div>
        </li>
        <li>
          <div className="dib">
            <i class="tl fas fa-shopping-cart fa-2x pa3"></i>
            <span className="f3 pa1">Payments</span>
          </div>
        </li>
        <li>
          <div className="dib">
            <i class="tl fas fa-house-user fa-2x pa3"></i>
            <span className="f3 pa1">Rooms</span>
          </div>
        </li>
        <li>
          <div className="dib">
          <i class="tl fas fa-user-graduate fa-2x pa3"></i>
            <span className="f3 pa1">Records</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
