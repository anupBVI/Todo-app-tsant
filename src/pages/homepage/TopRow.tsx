import { UserOutlined } from "@ant-design/icons";
import React from "react";
import {
  ContentHeader,
  HeaderLeft,
  HeaderRight,
  UserDetails,
  UserIcon,
  UserName,
} from "./homepage.styles";

const TopRow = () => {
  return (
    <ContentHeader>
      <HeaderLeft>
        <span>Happy Working !! </span>
      </HeaderLeft>

      <HeaderRight>
        <UserDetails>
          <UserIcon>
            <UserOutlined style={{ fontSize: "1rem", color: "#0f5070" }} />
          </UserIcon>
          <UserName>
            <span>John Doe</span>
            <span>Designer</span>
          </UserName>
        </UserDetails>
      </HeaderRight>
    </ContentHeader>
  );
};

export default TopRow;
