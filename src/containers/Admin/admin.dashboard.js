import React, { useState } from "react";
import "./admin.dashboard.css";
import Sidebar from "./Sidebar/sidebar";

const AdminNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchShown, setSearchBoxOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const displaySearchBox = () => setSearchBoxOpen(!searchShown);
  var openSidebar = isOpen ? "sidebar-open" : "leftSidebar";

  return (
    <>
      {searchShown ? (
        <div className="ml1" style = {{position: 'fixed', top: '0'}}>  
          <input
            className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder="search students records"
            onChange={(e) => console.log(e.target.value)}
          />
          <button
            className="dib pa2 mt2 bg-light-blue"
            onClick={displaySearchBox}
          >
            <i className="fa pa2 fa-times " />
          </button>
        </div>
      ) : (
        <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l" style = {{position: 'fixed', top: '0'}}>
          <div className="hamburger tl dib">
            {isOpen ? (
              <i className="fa fa-times fa-2x white" onClick={toggle}></i>
            ) : (
              <i className="fa fa-bars fa-2x white" onClick={toggle}></i>
            )}
          </div>
          <nav className="white pa0 fr dib">
            <i
              className="fa fa-search fa-2x  white"
              onClick={displaySearchBox}
            />
          </nav>
        </header>
      )}

      <div className="dashboardContainer">
        <div className={`leftSideBar ${openSidebar}`}>
          <Sidebar />
        </div>
        <div className="rightContents">
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p><p>Some texts and graphs and tables and something else</p>
          <p>Some texts and graphs and tables and something else</p>
        </div>
      </div>
    </>
  );
};

export default AdminNavBar;
