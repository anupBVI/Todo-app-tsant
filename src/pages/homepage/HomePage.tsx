import React, { useState, useEffect } from "react";
import { StyledContainer } from "../../styles/Styles";

import { SiBuymeacoffee } from "react-icons/si";
import { RiTimerFlashLine } from "react-icons/ri";
import { MdOutlineTimerOff } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";

import { Form, message, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import {
  BreakSection,
  Container,
  Content,
  ContentBody,
  Wrapper,
} from "./homepage.styles";
import Login from "./Login";
import { logBreaks, setAuthorization, startTimer, stopBreak } from "../../toolkit/reducers/TimerReducer";
import SideBar from "./Sidebar/SideBar";
import Card from "./Card";
import TopRow from "./TopRow";
import { BreakTimerModal, LoginTimerModal } from "./Modals/Modals";
import BreakRow from "./BreakRow";

interface DataType {
  key: string;
  name: string;
  age: string;
  address: string;
  tags: string[];
}

const HomePage = () => {
  const [showAll, setShowAll] = useState(false);
  const [breaks, setBreaks] = useState(false);
  const [current, setCurrent] = useState<any>({
    currentDate: "",
    loggedInAt: "",
  });

  const [totalLoggedInTime, setTotalLoggedInTime] = useState<any>(null);
  const [totalBreaksTime, setTotalBreaksTime] = useState<any>("00:00:00");

  const [fullDay, setFullDay] = useState("09:00:00");
  const [halfDay, setHalfDay] = useState("05:00:00");
  const [compared, setCompared] = useState<any>(null);

  // LOGIN TIMER
  const [loginTimer, setLoginTimer] = useState(0);
  const [isLoginRunning, setIsLoginRunning] = useState(false);
  const [loginIntervalId, setLoginIntervalId] = useState<any>(null);

  // BREAK TIMER
  const [breaksTimer, setBreaksTimer] = useState(0);
  const [isBreaksRunning, setIsBreaksRunning] = useState(false);
  const [breaksIntervalId, setBreaksIntervalId] = useState<any>(null);

  // ::::::::::::::::::::::::::::::::::::login
  const [auth, setAuth] = useState(false);
  const [formLogin] = Form.useForm();
  const [formBreak] = Form.useForm();
  
  // START BREAK TIMER MODAL 
  const [isModalOpenBreak, setIsModalOpenBreak] = useState(false);
  const HeadBreak = "Please fill the break Details";

  // START LOGIN TIMER MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Head = "Hey are you sure you want to Stop for today ?";

  const dispatch = useDispatch();

  const timerState = useSelector((state: any) => state.timer);
  const {isAuth,currentDate } = timerState.currentTracking

  const breakLogs: any = timerState.currentTracking.Totalbreaks.map(
    (items: any) => {
      return items;
    }
  );

  // :::::::::::::::::: T A B L E ::::::::::::::::::::::::::::


  const timeToSeconds = (time = "05:00:00") => {
    let [hours, minutes, seconds] = time?.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const secondsToTime = (seconds: any = "01111111") => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;
    return `${hours < 10 ? "0" : ""}${hours}hr:${
      minutes < 10 ? "0" : ""
    }${minutes}m:${sec < 10 ? "0" : ""}${sec}s`;
  };


  const columns: ColumnsType<DataType> = [
    {
      title: "Break Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Break Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Break Duration",
      dataIndex: "time",
      key: "time",
    },
  ];

  const data: DataType[] = breakLogs.map((items: any, index: number) => {
    return {
      key: `${index + 1}`,
      title: <p style={{ textTransform: "capitalize" }}>{items.title}</p>,
      description: items.description ? items.description : "--",
      time: items.time,
    };
  });

  // :::::::::::::::::: T A B L E ::::::::::::::::::::::::::::

  // :::::: SETTING THE DATE AND TIME
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
  // :::::: SETTING THE DATE AND TIME

  // ::::::::::::::::  TIME COMPARISION FUNCTIONS  ::::::::::::::::::::::::
  const addTimes = (time1: any = "05:00:00", time2: any = "01:30:30") => {
    // Convert time1 and time2 to seconds
    let seconds1 = timeToSeconds(time1.toString());
    let seconds2 = timeToSeconds(time2.toString());
    // Subtract the seconds
    let result = seconds1 + seconds2;

    // Convert the result back to a time value in the format "HH:MM:SS"
    return secondsToTime(result);
  };

  


  const compareTime = (time1 = "05:00:00", time2 = "01:30:30") => {
    let seconds1 = timeToSeconds(time1);
    let seconds2 = timeToSeconds(time2);

    // Subtract the seconds
    // let result2 = seconds1 < seconds2;

    // Convert the result back to a time value in the format "HH:MM:SS"
    // return seconds1 < seconds2;
    if (seconds1 < seconds2 === false) {
      return "less";
    } else if (seconds1 <= seconds2 === true) {
      return "Okay";
    }
  };



  // :::::::::::::::::::  TIME COMPARISION FUNCTIONS  ::::::::::::::::::::::

  // adding time function

  function sumTime(timeArr: any) {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    for (let i = 0; i < timeArr.length; i++) {
      let time = timeArr[i].split(":");
      seconds += parseInt(time[2]);
      minutes += parseInt(time[1]);
      hours += parseInt(time[0]);
    }

    // carry over seconds to minutes
    minutes += Math.floor(seconds / 60);
    seconds = seconds % 60;

    // carry over minutes to hours
    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;

    // format the time string
    const format = (x: any) => (x < 10 ? `0${x}` : x);
    const formattedSeconds = format(seconds);
    const formattedMinutes = format(minutes);
    const formattedHours = format(hours);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  const TotalBreakTime = sumTime(breakLogs.map((items: any) => items.time));

  // adding time function

  // AVERAGE BREAK TIME
  const averageTime = TotalBreakTime?.split(":");
  // Extract the minutes from the time components
  let averageMinutes = averageTime?.[1];
  let averageSeconds = averageTime?.[2];
  // Add a leading zero if necessary
  if (averageMinutes?.length < 2) {
    averageMinutes = "0" + averageMinutes;
  }
  if (averageSeconds?.length < 2) {
    averageSeconds = "0" + averageSeconds;
  }
  // AVERAGE BREAK TIME


  // 

   

  








  // :::::::::::::::::::: ON CLICK HANDLER FOR START AND STOP TIMER
  const handleStartLoginTimer = () => {
    setShowAll(true);
    // startDay();
    startLoginTimer();
    stopBreaksTimer();
    setBreaks(false);


    dispatch(startTimer(current));
  };

  const [total, setTotal] = useState("00:00:00")  
  
  const handleStopLoginTimer = () => {
    showModal();
    setTotalLoggedInTime(formatLoginTimer());
    // setTotalBreaksTime(formatBreaksTimer());
    setCompared(compareTime(fullDay, totalLoggedInTime));
    // setShowAll(false);
    // stopLoginTimer();
    // stopBreaksTimer();
    // showConfirm();
       console.log(addTimes(totalLoggedInTime , TotalBreakTime)) 
       setTotal(addTimes(totalLoggedInTime , TotalBreakTime))

  };
  // :::::::::::::::::::: ON CLICK HANDLER FOR START AND STOP TIMER

    console.log(total)

  const showModalBreak = () => {
    setIsModalOpenBreak(true);
  };

  const [breakSchema, setBreakSchema] = useState<any>([]);

  const onFinishBreak = (values: any) => {
    console.log("Success:", values);
    formBreak.resetFields();
    setIsModalOpenBreak(false);

    setBreaks(true);
    dispatch(stopBreak(true))
    // dispatch

    startBreaksTimer();
    stopLoginTimer();
    setTotalLoggedInTime(formatLoginTimer());

    setBreakSchema([
      ...breakSchema,
      { title: values.title, description: values.description },
    ]);
  };

  const handleOkBreak = () => {
    setIsModalOpenBreak(false);

    formBreak.resetFields();
  };
  const handleCancelBreak = () => {
    setIsModalOpenBreak(false);
    formBreak.resetFields();
  };
  // MODALS BREAK

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log("Ok clicked");

    openMessage("Ending Timer", "Ended Successfully");
    stopBreaksTimer();
    stopLoginTimer();

    stopBreaksTimer();
    // setTotalBreaksTime(formatBreaksTimer());



    setTimeout(() => {
      setShowAll(false);
    }, 1000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // MODALS LOGIN TIMER

  // :::::::::::::::::::: ON CLICK HANDLER FOR START AND STOP BREAK TIMER
  const handleStartBreaksTimer = () => {
    showModalBreak();

    // setBreaks(true);
    // startBreaksTimer();
    // stopLoginTimer();
    // setTotalLoggedInTime(formatLoginTimer());
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

    interface MyObject {
      title: string;
      description: string;
      time?: string;
    }
    setBreakSchema((prevState: MyObject[]) =>
      prevState.map((elem, index) =>
        index === prevState.length - 1
          ? { ...elem, time: totalBreaksTime }
          : elem
      )
    );

    if (totalBreaksTime !== "00:00:00") {
      // dispatch(logBreaks(totalBreaksTime));
    }
  }, [totalBreaksTime]);

  useEffect(() => {
    if (breakSchema.length !== 0) {
      console.log("Not zero", breakSchema);
      dispatch(logBreaks(breakSchema));
    }
  }, breakSchema);
  // :::::::::::::::::::: ON CLICK HANDLER FOR START AND STOP BREAK TIMER

  // START FUNCTIONS TO TOGGLE THE INTERVALS
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
  // START FUNCTIONS TO TOGGLE THE INTERVALS

  // BREAK FUNCTIONS TO TOGGLE THE INTERVALS
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
      setBreaksTimer(0);
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
  // BREAK FUNCTIONS TO TOGGLE THE INTERVALS

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

  // LOGIN
  const onFinish = (values: any) => {
    console.log("Success:", values);
    formLogin.resetFields();
    openMessage("Logging in", "Logged in Successfully");


    
    setTimeout(() => {
      // dispatch(setAuthorization(true))
      setAuth(true)
    }, 1000);
  };
  // LOGIN

  // ::::::::::::::::::::::::::::::::::::login

  return (
    <StyledContainer className="" style={{ background: "#fff" }}>
      <Wrapper>
        <Container>
          {auth ? (
            <>
              <SideBar />

              <Content>
                <TopRow />

                <ContentBody>
                  {showAll ? (
                    <>
                      <Card
                        name={"Work"}
                        icon={<RiTimerFlashLine />}
                        formated={formatLoginTimer()}
                        cursor={"default"}
                      />

                      {breaks ? (
                        <Card
                          className="breaker"
                          name={"Stop Break"}
                          icon={<SiBuymeacoffee />}
                          formated={formatBreaksTimer()}
                          handler={handleStopBreaksTimer}
                        />
                      ) : (
                        <Card
                          className=""
                          name={"Break"}
                          icon={<SiBuymeacoffee />}
                          formated={"Start Break"}
                          handler={handleStartBreaksTimer}
                        />
                      )}

                      <Card
                        className=""
                        name={"Work"}
                        icon={<MdOutlineTimerOff />}
                        formated={"Stop Timer"}
                        handler={handleStopLoginTimer}
                      />
                    </>
                  ) : (
                    <Card
                      className=""
                      name={"Work"}
                      icon={<RiTimerFlashLine />}
                      formated={"Start Timer"}
                      handler={handleStartLoginTimer}
                    />
                  )}
                </ContentBody>

                {showAll && (
                  <>
                    <BreakRow
                      TotalBreakTime={TotalBreakTime}
                      averageMinutes={averageMinutes}
                      averageSeconds={averageSeconds}
                    />
                    <BreakSection>
                      <Table
                        columns={columns}
                        pagination={false}
                        dataSource={data}
                      />
                    </BreakSection>
                  </>
                )}
              </Content>

              {/* ::::::  LOGIN TIMER MODAL ::::::::::::*/}
              <LoginTimerModal
                Head={Head}
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                totalLoggedInTime={totalLoggedInTime}
                halfDay={halfDay}
                fullDay={fullDay}
                compared={compared}
                total = {total}
              />
              {/* ::::::  LOGIN TIMER MODAL ::::::::::::*/}

              {/* ::::::  BREAK TIMER MODAL ::::::::::::*/}
              <BreakTimerModal
                HeadBreak={HeadBreak}
                isModalOpenBreak={isModalOpenBreak}
                handleOkBreak={handleOkBreak}
                handleCancelBreak={handleCancelBreak}
                onFinishBreak={onFinishBreak}
                formBreak={formBreak}
              />
              {/* ::::::  BREAK TIMER MODAL ::::::::::::*/}
            </>
          ) : (
            <Login
              setAuth={setAuth}
              onFinish={onFinish}
              formLogin={formLogin}
            />
          )}
        </Container>
      </Wrapper>
    </StyledContainer>
  );
};

export default HomePage;
