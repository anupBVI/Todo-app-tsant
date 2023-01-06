import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { RiTimerFlashLine } from "react-icons/ri";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  /* background: #000; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
const LoginContainer = styled.div`
  width: 60%;
  height: auto;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Logo = styled.div`
  /* background: ; */
  width: 220px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Header = styled.div`
  height: 15%;
  background: #438eb9;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.2rem;
    color: white;
    font-weight: 500;
  }
`;
const Body = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
    span{
        color: #464646;
        font-size:12px;
    }
`

const Login: any = (props: any) => {
  const { form22, onFinish } = props;

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Wrapper>
        <Logo>
          <img
            src="https://www.brainvire.com/assets/images/brainvire-logo.png?w=640&q=50"
            alt=""
          />
        </Logo>
        <LoginContainer>
          <Header>
            <span>Login</span>
          </Header>
          <Body>
            <Form
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              form={form22}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ background: "#438eb9" }}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Body>
        </LoginContainer>

        <Footer>
          <span> Copyright © Brainvire 2016, All Rights Reserved.</span>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Login;
