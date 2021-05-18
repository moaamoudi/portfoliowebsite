import * as reactBootstrap from "react-bootstrap";
import React from "react";
// import { Dropdown } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
import "./SideBar.scss";

function NavBar(props) {
  // collapsed,
  // rtl,
  // image,
  // handleToggleSidebar,

  const handleCollapsedChange = props.handleCollapsedChange;

  const history = useHistory();

  return (
    <reactBootstrap.Navbar
      variant="light"
      id="nav"
      className="bg-color text-center"
      style={{
        height: "5vh",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-list btn-toggle hov"
        viewBox="0 0 16 16"
        style={{
          justifyContent: "center",
          justifyItems: "center",
        }}
        onClick={() => props.handleToggleSidebar(true)}
      >
        <path
          fillRule="evenodd"
          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>

      <reactBootstrap.Navbar.Brand
        href="/"
        style={{
          justifyContent: "center",
          justifyItems: "center",
          marginLeft: "10%",
          color: "white",
        }}
      >
        {"<MA>"}
      </reactBootstrap.Navbar.Brand>
    </reactBootstrap.Navbar>
  );
}

export default NavBar;
