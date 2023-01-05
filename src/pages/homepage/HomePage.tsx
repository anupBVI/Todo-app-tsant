import {
  CoffeeOutlined,
  ContainerFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import styled from "styled-components";
import { StyledContainer } from "../../styles/Styles";

// import { MdWork } from "@react-icons/all-files/fa/FaBeer";

import { MdWork } from "@react-icons/all-files/md/MdWork";
import { useDispatch, useSelector } from "react-redux";
import { startTimer } from "../../redux/Timer/TimerActions";

const Container = styled.div`
  background: #2a9e81;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.section`
  width: 70%;
  height: 90%;
  background: #f6f6f6;
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Row1 = styled.div`
  background: #fef9f9;
`;
const Info = styled.div`
  padding: 8px 8px;
  /* background-color: #168f80; */
  width: 40%;
  display: flex;
  align-items: start;
  gap: 1rem;
`;
const Logo = styled.div`
  background-color: #2446f0;
  color: white;
  border-radius: 50%;
  padding: 5px 8px;
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
`;
const User = styled.span`
  color: #126294;
`;
const Date = styled.span`
  font-size: 10px;
`;

const Row2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 20px;
`;
const Card = styled.div`
  height: 17rem;
  border-radius: 20px;
  background: #2a9e81;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  &:nth-child(2) {
    background: #f9642e;
  }
`;
const CardIcon = styled.div`
  font-size: 3rem;
  color: white;
`;
const CardTime = styled.div`
  color: white;
  letter-spacing: 0.2rem;
  font-weight: bold;
  font-size: 1.2rem;
`;
const CardName = styled.div`
  color: white;
  letter-spacing: 0.1rem;
  font-size: 14px;
`;

const Row3 = styled.div`
  margin: 2px auto;
  display: flex;
  width: 60%;
  justify-content: space-between;
  /* border: 1px solid red; */
  align-items: center;
  padding: 5px 10px;
`;

const Left = styled.div``;
const BreakTitle = styled.div`
  font-weight: bold;
  color: #535353;
  letter-spacing: 0.1rem;
`;
const BreakTime = styled.div`
  font-size: 13px;
  color: #808080;
`;
const Right = styled.div`
  display: flex;
  gap: 1rem;
`;

const RightIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(2) {
    background: #167060;
    color: #fff;
  }
`;

const Button = styled.button`
  padding: 12px;
  width: 50%;
  font-weight: 500;
  background: #1d9cfe;
  border: 1px solid #1d9cfe;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  letter-spacing: 0.1rem;
  font-size: 18px;
  transition: 0.2s ease all;
  &:hover {
    transform: scaleX(1.1);
    background: none;
    color: #1d9cfe;
    border: 1px solid #1d9cfe;
  }
`;

const HomePage = () => {
  const [details, setDetails] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.timer);
  console.log(data);

  // let x = new Date

  // const IndianFormat = new Intl.DateTimeFormat("en-IN", {
  //       day: "2-digit",
  //       month: "2-digit",
  //       year: "numeric",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //       hour12: true,
  //     }).format()
  //   }

  // const startDay = () => {
  //   console.log("function called");
  //   const xx = new Intl.DateTimeFormat("en-IN", {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     hour12: true,
  //   }).format(new Date());
  //   const [dateW, timeW] = xx.split(",");
  //   setTest([dateW, timeW]);
  // };

  const handleClick = () => {
    setDetails(true);

  //  dispatch(startTimer({}))
  };
  return (
    <StyledContainer className="" style={{ background: "#fff" }}>
      <Container className="container">
        <Section>
          <Row1 className="row-1">
            <Info className="info">
              <Logo className="logo">
                <UserOutlined />
              </Logo>
              <Name className="name">
                <User>John Doe</User>
                <Date>Wed 25 Dec, 2022</Date>
              </Name>
            </Info>
          </Row1>
          {details ? (
            <>
              <Row2 className="row-2">
                <Card className="card">
                  <CardIcon className="icon">
                    <MdWork />
                  </CardIcon>
                  <CardTime className="time">01h 05m</CardTime>
                  <CardName className="card-name">Work</CardName>
                </Card>
                <Card className="card">
                  <CardIcon className="icon">
                    <CoffeeOutlined />
                  </CardIcon>
                  <CardTime className="time">01h 05m</CardTime>
                  <CardName className="card-name">Coffee</CardName>
                </Card>
              </Row2>
              <Row3 className="row-3">
                <Left className="left">
                  <BreakTitle className="heading">Break</BreakTitle>
                  <BreakTime className="break-time">
                    Avg time: 08h 22m
                  </BreakTime>
                </Left>
                <Right className="right">
                  <RightIcon className="iconss">20</RightIcon>
                  <RightIcon className="iconss">20</RightIcon>
                </Right>
              </Row3>
              <div className="row-4"></div>
            </>
          ) : (
            <Row2 style={{ background: "" }}>
              <Button onClick={handleClick}>Start Tracker</Button>
            </Row2>
          )}
        </Section>
      </Container>
    </StyledContainer>
  );
};

export default HomePage;

// const Container2 = styled.div`
//   background: #2a9e81;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   section {
//     width: 70%;
//     height: 90%;
//     background: #f6f6f6;
//     border-radius: 20px;
//     padding: 1rem;
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     .row-1 {
//       /* border: 1px solid red; */
//       .info {
//         padding: 8px 8px;
//         /* background-color: #168f80; */
//         width: 40%;
//         display: flex;
//         align-items: start;
//         gap: 1rem;
//         .logo {
//           background-color: #2446f0;
//           color: white;
//           border-radius: 50%;
//           padding: 5px 8px;
//           /* width: ; */
//         }
//         .name {
//           /* background-color: green; */
//           display: flex;
//           flex-direction: column;
//           span {
//             &:nth-child(1) {
//               color: #126294;
//             }
//             &:nth-child(2) {
//               font-size: 10px;
//             }
//           }
//         }
//       }
//     }
//     .row-2 {
//       /* border: 1px solid red; */
//       display: flex;
//       justify-content: center;
//       gap: 2rem;
//       padding: 20px;
//       .card {
//         height: 17rem;
//         border-radius: 20px;
//         background: #2a9e81;
//         width: 30%;
//         display: flex;
//         flex-direction: column;
//         gap: 2rem;
//         justify-content: center;
//         align-items: center;
//         &:nth-child(2) {
//           background: #f9642e;
//         }
//         .icon {
//           font-size: 3rem;
//           color: white;
//         }
//         .time {
//           color: white;
//           letter-spacing: 0.2rem;
//           font-weight: bold;
//           font-size: 1.2rem;
//         }
//         .card-name {
//           color: white;
//           letter-spacing: 0.1rem;
//           font-size: 14px;
//         }
//       }
//     }
//     .row-3 {
//       margin: 2px auto;
//       display: flex;
//       width: 60%;
//       justify-content: space-between;
//       /* border: 1px solid red; */
//       align-items: center;
//       padding: 5px 10px;
//       .left {
//         .heading {
//           font-weight: bold;
//           color: #535353;
//           letter-spacing: 0.1rem;
//         }
//         .break-time {
//           font-size: 13px;
//           color: #808080;
//         }
//       }
//       .right {
//         display: flex;
//         gap: 1rem;
//         .iconss {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           background: #e8e8e8;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           &:nth-child(2) {
//             background: #167060;
//             color: #fff;
//           }
//         }
//       }
//     }
//     .row-4 {
//     }
//   }
// `;

{
  /* <Container2 className="container">
<section>
  <div className="row-1">
    <div className="info">
      <div className="logo">
        <UserOutlined />
      </div>
      <div className="name">
        <span>John Doe</span>
        <span>Wed 25 Dec, 2022</span>
      </div>
    </div>
  </div>
  <div className="row-2">
    <div className="card">
      <div className="icon">
        <CoffeeOutlined />
      </div>
      <div className="time">01h 05m</div>
      <div className="card-name">Work</div>
    </div>
    <div className="card">
      <div className="icon">
        <CoffeeOutlined />
      </div>
      <div className="time">01h 05m</div>
      <div className="card-name">Coffee</div>
    </div>
  </div>
  <div className="row-3">
    <div className="left">
      <div className="heading">Break</div>
      <div className="break-time">Avg time: 08h 22m</div>
    </div>
    <div className="right">
      <div className="iconss">20</div>
      <div className="iconss">20</div>
    </div>
  </div>
  <div className="row-4"></div>
</section>
</Container2> */
}
