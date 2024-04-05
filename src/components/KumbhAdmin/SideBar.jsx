import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <Sidebar
      rootStyles={{
        backgroundColor: "#754C00",
        minHeight:"100vh",
        // height: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      <Menu>
        <MenuItem component={<Link to="/kumbhadmin/editabout" />}>
                About
        </MenuItem>
        <SubMenu label="Packages">
          <MenuItem component={<Link to="/kumbhadmin/createpackage" />}>
            {" "}
            Create Packages
          </MenuItem>
          <MenuItem component={<Link to="/kumbhadmin/editpackage" />}>
            {" "}
            Edit or Delete package
          </MenuItem>
        </SubMenu>
        <SubMenu label="Accomodations">
          <MenuItem component={<Link to="/kumbhadmin/createaccomodation" />}>
            {" "}
            Create Accomodations
          </MenuItem>
          <MenuItem component={<Link to="/kumbhadmin/editaccomodation" />}>
            {" "}
            Edit or Delete Accomodations
          </MenuItem>
        </SubMenu>
     
        <MenuItem component={<Link to="/kumbhadmin/customerbookings" />}>
                Customer Bookings
        </MenuItem>
        <MenuItem component={<Link to="/kumbhadmin/customerenquires" />}>
                Customer Enquires
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
