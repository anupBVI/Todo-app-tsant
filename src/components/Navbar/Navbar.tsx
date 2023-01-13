import {
  AimOutlined,
  AppstoreOutlined,
  BankOutlined,
  BuildOutlined,
  HeatMapOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  background: #ffffff;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .Logo {
    padding: 2px;

    .content {
      display: flex;
      justify-content: center;
    }
  }
  .nav-links {
    padding: 5px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      a {
        color: gray;
        &:active {
          color: #47ceff;
        }
      }
    }
  }
`;

const Navbar:any = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: " #47ceff",
  };

  let activeClassName = "underline";

  return (
    <StyledNavbar>
      <Row gutter={12} className="Logo">
        <Col className="gutter-row" span={24}>
          <div className="content">
            <NavLink
              to="/"
            >
              <UserOutlined style={{ fontSize: "2rem", color: "#0f5070" }} />
            </NavLink>
          </div>
        </Col>
      </Row>

      <Row gutter={12} className=" Logo nav-links">
        <Col className="gutter-row" span={24}>
          <div className="content">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              <HomeOutlined style={{ fontSize: "2rem" }} />
            </NavLink>
          </div>
        </Col>

        {/* <Col className="gutter-row" span={24}>
          <div className="content">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/todohome"
            >
              <AppstoreOutlined style={{ fontSize: "2rem" }} />
            </NavLink>
          </div>
        </Col> */}

        <Col className="gutter-row" span={24}>
          <div className="content">
            <NavLink
              to="/new"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}

            >
              <AimOutlined style={{ fontSize: "2rem" }} />
            </NavLink>
          </div>
        </Col>
        {/* <Col className="gutter-row" span={24}>
          <div className="content">
            <NavLink
              to="/new3"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <BankOutlined style={{ fontSize: "2rem" }} />
            </NavLink>
          </div>
        </Col> */}
        <Col className="gutter-row" span={24}>
          <div className="content">
            <NavLink
              to="/new4"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <BuildOutlined style={{ fontSize: "2rem" }} />
            </NavLink>
          </div>
        </Col>
      </Row>
      <Row gutter={12} className="Logo">
        <Col className="gutter-row" span={24}>
          <div className="content">
            <SettingOutlined style={{ fontSize: "2rem" }} />
          </div>
        </Col>
      </Row>
    </StyledNavbar>
  );
};

export default Navbar;
