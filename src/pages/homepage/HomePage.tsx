import {
  CoffeeOutlined,
  ContainerFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledContainer } from "../../styles/Styles";

// import { MdWork } from "@react-icons/all-files/fa/FaBeer";

import { MdWork } from "@react-icons/all-files/md/MdWork";
import { FaStopwatch } from "@react-icons/all-files/fa/FaStopwatch";
import { SiBuymeacoffee } from "react-icons/si";
import { RiTimerFlashLine } from "react-icons/ri";
import { MdOutlineTimerOff } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { startTimer } from "../../redux/Timer/TimerActions";

import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  BreakRow,
  BreakTime,
  BreakTitle,
  CardIcon,
  CardName,
  CardTime,
  Container,
  Content,
  ContentBody,
  ContentCard,
  ContentHeader,
  HeaderLeft,
  HeaderRight,
  Left,
  NavIcon,
  NavItem,
  NavItemName,
  NavItems,
  Right,
  RightIcon,
  Row3,
  Sidebar,
  UserDetails,
  UserIcon,
  UserName,
  Wrapper,
} from "./homepage.styles";
// import { FaStopwatch } from '@react-icons/all-files';

const HomePage = () => {
  const [details, setDetails] = useState(false);
  const dispatch = useDispatch();

  const [showAll, setShowAll] = useState(false);
  const [breaks, setBreaks] = useState(false);
  const [current, setCurrent] = useState<string[]>([]);

  const [totalLoggedInTime, setTotalLoggedInTime] = useState<any>(null);
  const [totalBreaksTime, setTotalBreaksTime] = useState<any>(null);

  // :::::::::::::::::: T A B L E ::::::::::::::::::::::::::::
  interface DataType {
    key: string;
    name: string;
    age: string;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Break Title",
      dataIndex: "name",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Break Description",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Break Duration",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "Lunch",
      age: "Test",
      address: "35m",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Coffee",
      age: "Test Coffee",
      address: "20m",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Fun",
      age: "Test Fun",
      address: "10m",
      tags: ["cool", "teacher"],
    },
  ];
  // :::::::::::::::::: T A B L E ::::::::::::::::::::::::::::


  useEffect(() => {
    const xx = new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date());
    const [CDate, CTime] = xx.split(",");
    setCurrent([CDate, CTime]);
  }, [])
  
  // useEffect(() => {
  //   dispatch(startTimer(current[1]));
  //   console.log("running");
  // }, [current[1]]);

  const Statedata = useSelector((state: any) => state.timer);
  // console.log(Statedata);


  // :::::::::::::::::::::: D A T E - F O R M A T  :::::::::::::::::::::::::
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
  //   const [CDate, CTime] = xx.split(",");
  //   setCurrent([CDate, CTime]);
  // };
  // :::::::::::::::::::::: D A T E - F O R M A T  :::::::::::::::::::::::::

  const handleStartLoginTimer = () => {
    setShowAll(true);
    // startDay();
    startLoginTimer();
    stopBreaksTimer()
    setBreaks(false);
    
    dispatch(startTimer(current))

  };
  const handleStopLoginTimer = () => {
    setShowAll(false);
    stopLoginTimer();
    stopBreaksTimer()

    setTotalLoggedInTime(formatLoginTimer());
    setTotalBreaksTime(formatBreaksTimer());
  };

  const handleStartBreaksTimer = () => {
    setBreaks(true);
    startBreaksTimer();
    stopLoginTimer();
    setTotalLoggedInTime(formatLoginTimer())

  };
  const handleStopBreaksTimer = () => {
    setBreaks(!breaks);
    stopBreaksTimer();
    setTotalBreaksTime(formatBreaksTimer());
    startLoginTimer()
  };

  // console.log("total logged in time --", totalLoggedInTime);
  // console.log("total breaks time --", totalBreaksTime);

  // LOGIN TIMER
  const [loginTimer, setLoginTimer] = useState(0);
  const [isLoginRunning, setIsLoginRunning] = useState(false);
  const [loginIntervalId, setLoginIntervalId] = useState<any>(null);

  function startLoginTimer() {
    if (!isLoginRunning) {
      const id = setInterval(() => {
        setLoginTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setLoginIntervalId(id);
      setIsLoginRunning(true);
    }
  }

  function stopLoginTimer() {
    if (isLoginRunning) {
      clearInterval(loginIntervalId);
      setLoginIntervalId(null);
      setIsLoginRunning(false);
    }
  }

  function formatLoginTimer() {
    let hours = Math.floor(loginTimer / 3600);
    let minutes = Math.floor((loginTimer % 3600) / 60);
    let seconds = loginTimer % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  // LOGIN TIMER

  // BREAK TIMER
  const [breaksTimer, setBreaksTimer] = useState(0);
  const [isBreaksRunning, setIsBreaksRunning] = useState(false);
  const [breaksIntervalId, setBreaksIntervalId] = useState<any>(null);

  function startBreaksTimer() {
    if (!isBreaksRunning) {
      const id = setInterval(() => {
        setBreaksTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setBreaksIntervalId(id);
      setIsBreaksRunning(true);
    }
  }

  function stopBreaksTimer() {
    if (isBreaksRunning) {
      clearInterval(breaksIntervalId);
      setBreaksIntervalId(null);
      setIsBreaksRunning(false);
    }
  }

  function formatBreaksTimer() {
    let hours = Math.floor(breaksTimer / 3600);
    let minutes = Math.floor((breaksTimer % 3600) / 60);
    let seconds = breaksTimer % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  // BREAK TIMER

  return (
    <StyledContainer className="" style={{ background: "#fff" }}>
      <Wrapper>
        <Container>
          <Sidebar>
            <NavItems>
              <NavItem>
                <NavIcon>
                  <MdWork style={{ color: "#2fa1f8" }} />
                </NavIcon>
                <NavItemName style={{ color: "#2fa1f8" }}>
                  Time Tracker
                </NavItemName>
              </NavItem>

              <NavItem>
                <NavIcon>
                  <MdWork />
                </NavIcon>
                <NavItemName>Dashboard</NavItemName>
              </NavItem>
              <NavItem>
                <NavIcon>
                  <MdWork />
                </NavIcon>
                <NavItemName>Reports</NavItemName>
              </NavItem>
              <NavItem>
                <NavIcon>
                  <MdWork />
                </NavIcon>
                <NavItemName>Team</NavItemName>
              </NavItem>
            </NavItems>
          </Sidebar>

          <Content>
            <ContentHeader>
              <HeaderLeft>
                <span>Happy Working !! </span>
              </HeaderLeft>

              <HeaderRight>
                <UserDetails>
                  <UserIcon>
                    <UserOutlined
                      style={{ fontSize: "1rem", color: "#0f5070" }}
                    />
                  </UserIcon>
                  <UserName>
                    <span>John Doe</span>
                    <span>Designer</span>
                  </UserName>
                </UserDetails>
              </HeaderRight>
            </ContentHeader>

            <ContentBody>
              {showAll ? (
                <>
                  <ContentCard>
                    <CardIcon className="icon">
                      <RiTimerFlashLine />
                    </CardIcon>
                    <CardTime className="time">{formatLoginTimer()}</CardTime>
                    <CardName className="card-name">Work</CardName>
                  </ContentCard>
                  {breaks ? (
                    <ContentCard
                      className="breaker"
                      onClick={handleStopBreaksTimer}
                    >
                      <CardIcon className="icon">
                        <SiBuymeacoffee />
                      </CardIcon>
                      <CardTime className="time">
                        {formatBreaksTimer()}
                      </CardTime>
                      <CardName className="card-name">STOP BREAK</CardName>
                    </ContentCard>
                  ) : (
                    <ContentCard onClick={handleStartBreaksTimer}>
                      <CardIcon className="icon">
                        <SiBuymeacoffee />
                      </CardIcon>
                      <CardTime className="time">Start Break</CardTime>
                      <CardName className="card-name">START BREAK</CardName>
                    </ContentCard>
                  )}
                  <ContentCard onClick={handleStopLoginTimer}>
                    {/* <ContentCard onClick={() => setShowAll(false)}> */}
                    <CardIcon className="icon">
                      <MdOutlineTimerOff />
                    </CardIcon>
                    <CardTime className="time">STOP TIMER</CardTime>
                    <CardName className="card-name">Work</CardName>
                  </ContentCard>
                </>
              ) : (
                <ContentCard
                  // onClick={() => {
                  //   setShowAll(true);
                  // }}
                  onClick={handleStartLoginTimer}
                >
                  <CardIcon className="icon">
                    <RiTimerFlashLine />
                  </CardIcon>
                  <CardTime className="time">START TIMER</CardTime>
                  <CardName className="card-name">Work</CardName>
                </ContentCard>
              )}
            </ContentBody>

            {showAll && (
              <>
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

                <BreakRow>
                  <Table
                    columns={columns}
                    pagination={false}
                    dataSource={data}
                  />
                </BreakRow>
              </>
            )}
          </Content>
        </Container>
      </Wrapper>
    </StyledContainer>
  );
};

export default HomePage;
