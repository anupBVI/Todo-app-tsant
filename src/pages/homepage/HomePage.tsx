import React, { useState } from "react";
import { StyledContainer } from "../../styles/Styles";
import styled from "styled-components";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTimer } from "./../../redux/Timer/TimerActions";

// reference -- https://dribbble.com/shots/14641983-Sleep-Time-Tracker-App

interface IData {
  allData: {
    date1: string;
    startTime: string;
    endTime: string;
    breaks: {
      startBreak: string;
      endBreak: string;
    }[];
  }[];
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #09604a;
`;
const Section = styled.div`
  width: 70%;
  padding: 1rem;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  span {
    color: #434343;
  }
`;
const DateRow = styled.div`
  /* background: #d9c705; */
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  background: #09604a;
`;

const HomePage = () => {
  // states required
  //  timerdate
  //  dayStart
  //   dayEnd
  //   breakStart
  //   breakEnd

  const state = useSelector((state: any) => state.timer);
  const dispatch = useDispatch();

  const [test, setTest] = useState<{}>({
    dates: "",
    times: "",
  });

  const startDay = () => {
    console.log("function called");
    const xx = new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date());
    const [dateW, timeW] = xx.split(",");
    setTest([dateW, timeW]);
  };

  const [start, setStart] = useState(false);
  const [breaks, setBreaks] = useState(false);
  const [breakStart, setBreakStart] = useState("Start Break");
  const [breakEnd, setBreakEnd] = useState("End break");

  const handleTimer = () => {
    setStart(false);
    startDay();

    // dispatch(addTimer())
  };

  const handleBreaks = () => {
    setBreaks(!breaks);
  };

  const Data = [
    {
      date: "04/01/2011",
      startTime: "10:00AM",
      endTime: "07:00PM",
      breaks: [
        {
          startBreak: "01:00PM",
          endBreak: "02:00PM",
        },
        {
          startBreak: "04:00PM",
          endBreak: "04:15PM",
        },
      ],
    },
  ];

  return (
    <StyledContainer className="">
      <Container>
        <Section>
          <div style={{ background: "", width: "100%" }}>
            icons
            <span> Hello John Doe</span>
          </div>

          <div style={{ width: "70%" }}>
            <Button
              type={"primary"}
              onClick={handleTimer}
              disabled={start}
              block
            >
              Start Timer
            </Button>
          </div>
          {start ? "Tracking for Today" : "Tracker not Active"}
          {start && (
            <DateRow>
              <p>Date : </p>

              <p>Start Time : </p>
              <p>End Time :</p>
            </DateRow>
          )}

          {start && (
            <div>
              <Button type={"primary"} danger={breaks} onClick={handleBreaks}>
                {breaks ? "Stop Break" : "Start Break"}
              </Button>
            </div>
          )}

          {breaks && (
            <DateRow>
              <p>Date : 04/01/2023 </p>
              <p>Break Start Time : </p>
              <p>Break End Time : </p>
            </DateRow>
          )}

          <CardWrapper>
            <Card>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas quasi totam, eos adipisci, excepturi perspiciatis rem
                sed commodi accusamus provident, tenetur iusto.
              </p>
            </Card>
            <Card>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas quasi totam, eos adipisci, excepturi perspiciatis rem
                sed commodi accusamus provident, tenetur iusto.
              </p>
            </Card>
          </CardWrapper>
        </Section>
      </Container>
    </StyledContainer>
  );
};

export default HomePage;
