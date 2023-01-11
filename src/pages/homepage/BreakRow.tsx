import React from "react";
import { BreakTime, BreakTitle, Left, Right, RightIcon, Row3 } from "./homepage.styles";

interface BreakRowProps {
    TotalBreakTime:string;
    averageMinutes:string;
    averageSeconds:string;
}

const BreakRow = (props:BreakRowProps) => {
    const {TotalBreakTime , averageMinutes , averageSeconds} = props
  return (
    <Row3 className="row-3">
      <Left className="left">
        <BreakTitle className="heading">Break</BreakTitle>
        <BreakTime className="break-time">
          {/* Avg time: 08h 22m */}
          Avg time: {TotalBreakTime}
        </BreakTime>
      </Left>
      <Right className="right">
        <RightIcon className="iconss">
          <span
            style={{
              fontSize: "14px",
              color: "#5e5e5e",
              fontWeight: "600",
            }}
          >
            {averageMinutes}m
          </span>
        </RightIcon>
        <RightIcon className="iconss">
          <span
            style={{
              fontSize: "14px",
              color: "#ffffff",
              fontWeight: "600",
            }}
          >
            {averageSeconds}s
          </span>
        </RightIcon>
      </Right>
    </Row3>
  );
};

export default BreakRow;
