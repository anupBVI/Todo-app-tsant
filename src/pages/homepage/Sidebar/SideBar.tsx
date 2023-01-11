import React from "react";
import { NavIcon, NavItem, NavItems, Sidebar, NavItemName } from './../homepage.styles';
import { BiTimer } from 'react-icons/bi';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { ProjectOutlined } from "@ant-design/icons";
import { AiOutlineTeam } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

const SideBar = () => {
  return (
    <Sidebar>
      <NavItems>
        {/* <NavLink to="/home/dashboard">
      <NavItem>
        <NavIcon>
          <MdOutlineDashboardCustomize />
        </NavIcon>
        <NavItemName>Dashboard</NavItemName>
      </NavItem>
      </NavLink> */}
        <NavItem>
          <NavIcon>
            <BiTimer style={{ color: "#29a9df" }} />
          </NavIcon>
          <NavItemName style={{ color: "#2fa1f8" }}>Time Tracker</NavItemName>
        </NavItem>
        <NavItem>
          <NavIcon>
            <MdOutlineDashboardCustomize />
          </NavIcon>
          <NavItemName>Dashboard</NavItemName>
        </NavItem>
        <NavItem>
          <NavIcon>
            <TbReportSearch />
          </NavIcon>
          <NavItemName>Reports</NavItemName>
        </NavItem>
        <NavItem>
          <NavIcon>
            <ProjectOutlined style={{}} />
          </NavIcon>
          <NavItemName>Projects</NavItemName>
        </NavItem>
        <NavItem>
          <NavIcon>
            <AiOutlineTeam />
          </NavIcon>
          <NavItemName>Team</NavItemName>
        </NavItem>
        <NavItem>
          <NavIcon>
            <IoMdSettings />
          </NavIcon>
          <NavItemName>Settings</NavItemName>
        </NavItem>
      </NavItems>
    </Sidebar>
  );
};

export default SideBar;
