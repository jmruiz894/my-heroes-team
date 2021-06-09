import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom"

//Styles
import "./Sidebar.css";

const Sidebar = ( props ) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      id="sidebar"
    >
      <Link
        to="/home"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">My Heroes Team</span>
      </Link>
      <hr />
        <SearchForm {...props}/>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="#my-team" className="nav-link text-white" aria-current="page">
            My Team
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
