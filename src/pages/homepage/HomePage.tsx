import {
  CoffeeOutlined,
  ContainerFilled,
  ExclamationCircleFilled,
  ProjectOutlined,
  QuestionCircleFilled,
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
import { BiTimer } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { startBreak, startTimer } from "../../redux/Timer/TimerActions";

import { Button, Form, message, Modal, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

import { increment, decrement } from "../../toolkit/reducers/counterReducer";
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
import Modals from "./Modals";
import Login from "./Login";
// import { FaStopwatch } from '@react-icons/all-files';
import Icon from "./../../components/Icons/Icon";
import { logBreaks, startTimer2 } from "../../toolkit/reducers/TimerReducer";

const HomePage = () => {
  const tableStyle = {
    border: "1px solid #c4c4c4",
    width: "100%",
    height: "40px",
    borderRadius: "3px",
    padding: "12px",
  };
  const trStyle = {
    padding: "20px",
    height: "40px",
  };
  const tdStyle: any = {
    textAlign: "center",
  };

  const thStyle = {
    borderBottom: "1px solid #d8d8d8",
    fontWeight: "normal",
  };

  const [details, setDetails] = useState(false);
  const dispatch = useDispatch();

  // const countState = useSelector((state: any) => console.log(state.counter));
  const count = useSelector((state: any) => state.counter.value);
  // const timer = useSelector((state: any) => console.log(state.timer));

  const timerState = useSelector((state: any) => state.timer);

  // console.log(timerState.currentTracking.Totalbreaks.map((item:any)=>{
  //   return item.break
  // }))

  const breakLogs: any = timerState.currentTracking.Totalbreaks.map(
    (items: any) => {
      return items.break;
    }
  );

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement(2));
  };

  const [showAll, setShowAll] = useState(false);
  const [breaks, setBreaks] = useState(false);
  const [current, setCurrent] = useState<any>({
    currentDate: "",
    loggedInAt: "",
  });

  const [totalLoggedInTime, setTotalLoggedInTime] = useState<any>(null);
  const [totalBreaksTime, setTotalBreaksTime] = useState<any>("00:00:00");

  const [fullDay, setFullDay] = useState("08:00:00");
  const [halfDay, setHalfDay] = useState("04:30:00");
  const [compared, setCompared] = useState<any>(null);

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

  // const data: DataType[] = [dataSource];

  const data: DataType[] = breakLogs.map((items: any, index: number) => {
    console.log(items);
    return {
      key: `${index + 1}`,
      name: "--",
      age: "--",
      address: items,
      tags: ["nice", "developer"],
    };
  });

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
    setCurrent({ currentDate: CDate, loggedInAt: CTime });
  }, []);

  // console.log(current)

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

  // ::::::::::::::::  TIME COMPARISION FUNCTIONS  ::::::::::::::::::::::::
  function subtractTimes(time1: any = "05:00:00", time2: any = "01:30:30") {
    // Convert time1 and time2 to seconds
    let seconds1 = timeToSeconds(time1.toString());
    let seconds2 = timeToSeconds(time2.toString());

    // Subtract the seconds
    let result = seconds1 - seconds2;

    // Convert the result back to a time value in the format "HH:MM:SS"
    return secondsToTime(result);
  }

  function compareTime(time1 = "05:00:00", time2 = "01:30:30") {
    let seconds1 = timeToSeconds(time1);
    let seconds2 = timeToSeconds(time2);

    // Subtract the seconds
    // let result2 = seconds1 < seconds2;

    // Convert the result back to a time value in the format "HH:MM:SS"
    // return seconds1 < seconds2;
    if (seconds1 < seconds2 === false) {
      return "less ";
    } else if (seconds1 <= seconds2 === true) {
      return "Okay";
    }
  }

  function timeToSeconds(time = "05:00:00") {
    let [hours, minutes, seconds] = time?.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  function secondsToTime(seconds: any = "01111111") {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;
    return `${hours < 10 ? "0" : ""}${hours}hr:${
      minutes < 10 ? "0" : ""
    }${minutes}m:${sec < 10 ? "0" : ""}${sec}s`;
  }

  const timeComponents2 = totalBreaksTime?.split(":");

  // console.log(timeComponents2);

  // Extract the minutes from the time components
  let minutes22 = timeComponents2?.[1];
  let seconds22 = timeComponents2?.[2];
  // Add a leading zero if necessary
  if (minutes22?.length < 2) {
    minutes22 = "0" + minutes22;
  }
  if (seconds22?.length < 2) {
    seconds22 = "0" + seconds22;
  }

  // :::::::::::::::::::  TIME COMPARISION FUNCTIONS  ::::::::::::::::::::::

  // console.log(subtractTimes("05:00:00", "03:30:40")); // Outputs "3:40"
  // console.log(compareTime("08:00:00", "08:00:01")); // Outputs "3:40"

  // console.log("totalLoggedInTime  --- ", totalLoggedInTime)
  // console.log("totalBreaksTime  --- ", totalBreaksTime)

  // :::::::::::::::::::: ON CLICK HANDLER FOR START AND STOP TIMER
  const handleStartLoginTimer = () => {
    setShowAll(true);
    // startDay();
    startLoginTimer();
    stopBreaksTimer();
    setBreaks(false);
    dispatch(startTimer(current));

    dispatch(startTimer2(current));
  };

  const handleStopLoginTimer = () => {
    showModal();
    setTotalLoggedInTime(formatLoginTimer());
    setTotalBreaksTime(formatBreaksTimer());
    setCompared(compareTime(halfDay, totalLoggedInTime));
    // setShowAll(false);
    // stopLoginTimer();
    // stopBreaksTimer();
    // showConfirm();
  };
  // :::::::::::::::::::: ON CLICK HANDLER FOR START AND STOP TIMER

  // MODALS
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { confirm } = Modal;
  console.log();

  // Taking some time set the loggedin time

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log("Ok clicked");

    openMessage("Logging out", "Logged out Successfully");
    stopBreaksTimer();
    stopLoginTimer();

    stopBreaksTimer();

    setTimeout(() => {
      setShowAll(false);
    }, 1000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // MODALS

  // :::::::::::::::::::: ON CLICK HANDLER FOR START AND STOP BREAK TIMER
  const handleStartBreaksTimer = () => {
    setBreaks(true);
    startBreaksTimer();
    stopLoginTimer();
    setTotalLoggedInTime(formatLoginTimer());
    // startBreak()
  };

  const handleStopBreaksTimer = () => {
    setBreaks(!breaks);
    stopBreaksTimer();
    setTotalBreaksTime(formatBreaksTimer());
    startLoginTimer();

    // dispatch(startBreak(totalBreaksTime));

    // dispatch(logBreaks(totalBreaksTime));
  };

  useEffect(() => {
    console.log("TOTAL BREAK TIME", totalBreaksTime);
    // dispatch(startBreak(totalBreaksTime));
    if (totalBreaksTime !== "00:00:00") dispatch(logBreaks(totalBreaksTime));
  }, [totalBreaksTime]);

  // console.log(totalBreaksTime)
  // :::::::::::::::::::: ON CLICK HANDLER FOR START AND STOP BREAK TIMER

  // console.log("total logged in time --", totalLoggedInTime);
  // console.log("total breaks time --", totalBreaksTime);

  // LOGIN TIMER
  const [loginTimer, setLoginTimer] = useState(0);
  const [isLoginRunning, setIsLoginRunning] = useState(false);
  const [loginIntervalId, setLoginIntervalId] = useState<any>(null);

  const startLoginTimer = () => {
    if (!isLoginRunning) {
      const id = setInterval(() => {
        setLoginTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setLoginIntervalId(id);
      setIsLoginRunning(true);
    }
  };

  const stopLoginTimer = () => {
    if (isLoginRunning) {
      clearInterval(loginIntervalId);
      setLoginIntervalId(null);
      setIsLoginRunning(false);
    }
  };

  const formatLoginTimer = () => {
    let hours = Math.floor(loginTimer / 3600);
    let minutes = Math.floor((loginTimer % 3600) / 60);
    let seconds = loginTimer % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  // LOGIN TIMER

  // BREAK TIMER
  const [breaksTimer, setBreaksTimer] = useState(0);
  const [isBreaksRunning, setIsBreaksRunning] = useState(false);
  const [breaksIntervalId, setBreaksIntervalId] = useState<any>(null);

  const startBreaksTimer = () => {
    if (!isBreaksRunning) {
      const id = setInterval(() => {
        setBreaksTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setBreaksIntervalId(id);
      setIsBreaksRunning(true);
    }
  };

  const stopBreaksTimer = () => {
    if (isBreaksRunning) {
      clearInterval(breaksIntervalId);
      setBreaksIntervalId(null);
      setIsBreaksRunning(false);
    }
  };

  const formatBreaksTimer = () => {
    let hours = Math.floor(breaksTimer / 3600);
    let minutes = Math.floor((breaksTimer % 3600) / 60);
    let seconds = breaksTimer % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  // BREAK TIMER

  // ::::::::::::::::::::::::::::::::::::OPEN-MESSAGE

  const openMessage = (x: string, y: string) => {
    const key = "updatable";
    message.open({
      key,
      type: "loading",
      content: x,
    });
    setTimeout(() => {
      message.open({
        key,
        type: "success",
        content: y,
        duration: 2,
      });
    }, 1000);
  };
  // ::::::::::::::::::::::::::::::::::::OPEN-MESSAGE

  // ::::::::::::::::::::::::::::::::::::login
  const [auth, setAuth] = useState(false);
  const [form22] = Form.useForm();

  const Head = "Hey are you sure you want to Stop for today ?";

  const onFinish = (values: any) => {
    console.log("Success:", values);
    form22.resetFields();
    openMessage("Logging in", "Logged in Successfully");
    setTimeout(() => {
      setAuth(true);
    }, 1000);
  };
  // ::::::::::::::::::::::::::::::::::::login

  return (
    <StyledContainer className="" style={{ background: "#fff" }}>
      <Wrapper>
        <Container>
          {auth ? (
            <>
              <Sidebar>
                <NavItems>
                  <NavItem>
                    <NavIcon>
                      <BiTimer style={{ color: "#29a9df" }} />
                    </NavIcon>
                    <NavItemName style={{ color: "#2fa1f8" }}>
                      Time Tracker
                    </NavItemName>
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
                      <ContentCard style={{ cursor: "default" }}>
                        <CardIcon className="icon">
                          <RiTimerFlashLine />
                        </CardIcon>
                        <CardTime className="time">
                          <p>{formatLoginTimer()}</p>
                        </CardTime>
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
                          <CardName className="card-name">Stop Break</CardName>
                        </ContentCard>
                      ) : (
                        <ContentCard onClick={handleStartBreaksTimer}>
                          <CardIcon className="icon">
                            <SiBuymeacoffee />
                          </CardIcon>
                          <CardTime className="time">Start Break</CardTime>
                          <CardName className="card-name">Start Break</CardName>
                        </ContentCard>
                      )}
                      <ContentCard onClick={handleStopLoginTimer}>
                        {/* <ContentCard onClick={() => setShowAll(false)}> */}
                        <CardIcon className="icon">
                          <MdOutlineTimerOff />
                        </CardIcon>
                        <CardTime className="time">Stop Timer</CardTime>
                        <CardName className="card-name">Work</CardName>
                      </ContentCard>
                    </>
                  ) : (
                    <ContentCard onClick={handleStartLoginTimer}>
                      <CardIcon className="icon">
                        <RiTimerFlashLine />
                      </CardIcon>
                      <CardTime className="time">Start Timer</CardTime>
                      <CardName className="card-name">Work</CardName>
                    </ContentCard>
                  )}
                </ContentBody>

                {/* <Modals/> */}

                {showAll && (
                  <>
                    <Row3 className="row-3">
                      <Left className="left">
                        <BreakTitle className="heading">Break</BreakTitle>
                        <BreakTime className="break-time">
                          {/* Avg time: 08h 22m */}
                          Avg time: {totalBreaksTime}
                        </BreakTime>
                      </Left>
                      <Right className="right">
                        <RightIcon className="iconss">{minutes22}m</RightIcon>
                        <RightIcon className="iconss">{seconds22}s</RightIcon>
                      </Right>
                    </Row3>
                    {/* subtractTimes */}
                    <BreakRow>
                      {/* <div className="table">
                        {breakLogs.length !== 0 ? (
                          <table style={tableStyle}>
                            <tr style={trStyle}>
                              <th style={thStyle}>Break Title</th>
                              <th style={thStyle}>Break Description</th>
                              <th style={thStyle}>Break Duration</th>
                            </tr>

                            {breakLogs.map((items: any) => {
                              console.log(items);
                              return (
                                <tr style={trStyle}>
                                  <td style={tdStyle}>--</td>
                                  <td style={tdStyle}>--</td>
                                  <td style={tdStyle}>{items}</td>
                                </tr>
                              );
                            })}
                          </table>
                        ) : (
                          <p>No Breaks</p>
                        )}
                      </div> */}

                      <Table
                        columns={columns}
                        pagination={false}
                        dataSource={data}
                      />
                    </BreakRow>
                  </>
                )}
              </Content>

              <Modal
                // title={<ExclamationCircleFilled />}
                title={Head}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelText="Cancel"
                okText="Stop Anyway"
              >
                {totalLoggedInTime < halfDay && (
                  <p style={{ color: "#484848", fontSize: "18px" }}>
                    Hey ! Your total time logged for today is{" "}
                    {totalLoggedInTime} which is {compared} than half day,
                    logged in hours this will not be counted as half day. Stop
                    Anyway !
                  </p>
                )}
                {totalLoggedInTime > halfDay && totalLoggedInTime < fullDay && (
                  <p style={{ color: "#484848", fontSize: "18px" }}>
                    Hey ! Your total time logged for today is{" "}
                    {totalLoggedInTime} which is {compared} than full day day,
                    logged in hours this will not be counted as half day. Stop
                    Anyway !
                  </p>
                )}
                {totalLoggedInTime >= fullDay && (
                  <p style={{ color: "#484848", fontSize: "20px" }}>
                    Thank you! You have completed your Work Hours successfully
                  </p>
                )}
              </Modal>
            </>
          ) : (
            <Login setAuth={setAuth} onFinish={onFinish} form22={form22} />
          )}
        </Container>
      </Wrapper>
    </StyledContainer>
  );
};

export default HomePage;

//   return state

//   return [
//     {
//       currentDate: currentDate,
//       loggedInAt: loggedInAt,
//       Totalbreaks: [
//         {
//           break: "00:00:02",
//         },
//       ],
//     },
//   ];

// interface ITotalBreak {
//   break: string;
// }

// interface IState {
//   currentDate: string;
//   loggedInAt: string;
//   Totalbreaks: ITotalBreak[];
// }

// export type IStateArray = IState[];

// const initialState: IStateArray = [
//   {
//     currentDate: "",
//     loggedInAt: "",
//     Totalbreaks: [
//       {
//         break: "00:00:01",
//       },
//     ],
//   },
// ];

// // :::::::::::::
// interface inStateType {
//     currentTracking : {
//         currentDate : string,
//         loggedInAt: string,
//         Totalbreaks: ITotalBreak[]
//     }
// }
// const inState = {
//     currentTracking : {
//         currentDate : "",
//         loggedInAt: "",
//         Totalbreaks: [
//             {
//              break: "00:00:01",
//             },
//        ],
//     }
// }
// // :::::::::::::

// const initialState2 = {
//     isUserOnBreak: false,
//     currentTracking:{
//         loggedInAt: "",
//        Totalbreaks: [
//             {
//              break: "00:00:01",
//             },
//        ],
//      },
//     MonthlyTrackData:[]
// }

// interface Action {
//   payload: {
//     currentDate: string;
//     loggedInAt: string;
//   };
// }
