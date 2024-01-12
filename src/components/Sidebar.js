import React from "react";
import { Bs2Square, BsCart3, BsDoorOpen, BsFileSpreadsheetFill, BsHouse, BsHouseFill, BsPersonFill, BsSignDoNotEnter, BsSquareFill, BsSquareHalf } from "react-icons/bs";
import{BiLogOut}from'react-icons/bi';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar"  className={openSidebarToggle ? "sidebar-responsive": ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
                <BsCart3 className="icon_header"/>Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>

         <ul className="sidebar-list">
            <li className="sidebar-list-item">
               <BsHouseFill/>{" "}Home
            </li>
            <li className="sidebar-list-item">
               <BsFileSpreadsheetFill/>{" "}Admin
            </li>
            <li className="sidebar-list-item">
               <BsSquareHalf/>{" "}Membership
            </li>
            <li className="sidebar-list-item">
               <BsPersonFill/>{" "}Associate
            </li>
         </ul>
         <div className="logout">
              <ul className="sidebar-list">
                <li className="sidebar-list-logout"><BiLogOut/>{" "} Logout</li>
              </ul>
         </div>

    </aside>
  );
}

export default Sidebar;
