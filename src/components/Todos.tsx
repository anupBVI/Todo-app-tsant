import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Col, Collapse, Row } from "antd";
import React, { ReactNode } from "react";
import { Button } from "./Buttons/Button";
import Card from "./Cards/Card";
import Icon from "./Icons/Icon";

const { Panel } = Collapse;

interface TodosProps {
  data: {
    id: string;
    title: string;
    description: string;
    url: string;
    category: string;
  }[];
  icon: ReactNode;
  category: string;
  defaultKey: boolean;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
  handleComplete: (id: string) => void;
  show: boolean;
  setOpen:any
}

const Todos = (props: TodosProps) => {
  const {
    data,
    category,
    defaultKey,
    handleDelete,
    handleEdit,
    handleComplete,
    show,
    icon,
    setOpen
  } = props;
  const Head = (
    <span style={{ fontSize: "1.1rem", color: "#424242" }}> {category} ({data.length}) </span>
  );

  return (
    <Row gutter={[3, 12]} className="row-wrapper row-wrapper-collapse">
      <Col className="gutter-row" lg={24} md={24} sm={24} xs={24}>
        <div className="content">
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="end"
            defaultActiveKey={defaultKey ? ["1"] : ""}
          >
            <Panel header={Head} key="1">
              <Card
                data={data}
                icon={icon}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleComplete={handleComplete}
                setOpen={setOpen}
              />
            </Panel>
          </Collapse>
        </div>
      </Col>
    </Row>
  );
};

export default Todos;
