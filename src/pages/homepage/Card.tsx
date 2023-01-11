import React from "react";
import { RiTimerFlashLine } from "react-icons/ri";
import { CardIcon, CardName, CardTime, ContentCard } from "./homepage.styles";
import { ReactNode } from "react";

interface CardProps {
  name: string;
  icon: ReactNode;
  formated: string;
  className?: string;
  handler?: () => void;
  cursor?: string;
}

const Card = (props: CardProps) => {
  const { name, icon, formated, className, handler, cursor } = props;
  return (
    <ContentCard
      className={className}
      onClick={handler}
      style={{ cursor: cursor }}
    >
      <CardIcon className="icon">{icon}</CardIcon>
      <CardTime className="time">
        <p>{formated}</p>
      </CardTime>
      <CardName className="card-name">{name}</CardName>
    </ContentCard>
  );
};

export default Card;
