import {
  DeleteOutlined,
  EditOutlined,
  GlobalOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Col, Collapse, Form, Input, Modal, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addCategory,
  addTodo,
  deleteTodo,
  editTodo,
} from "../../redux/Todos/TodoActions";

const NewTodo = (props: any) => {
  const dispatch = useDispatch();
  const { Panel } = Collapse;

  const { state, handleEditor , showTaskModal , notifySuccess } = props;
  return (
    <>
      {state.map((item: any, index: any) => {
        const Head = (
          <div style={{ width: "200px" }}>
            <span
              style={{
                fontWeight: "500",
                fontSize: "1.1rem",
                color: "#3e3e3e",
              }}
            >
              {item.categoryN} <small>({item.actualData?.length})</small>{" "}
            </span>
          </div>
        );
        return (
          <div>
            <Collapse
              defaultActiveKey={["1"]}
              ghost
              expandIconPosition={"end"}
              className="testi"
            >
              <Panel header={Head} key={index + 1}>
                <Row gutter={[12, 12]}>

                {item?.actualData.length === 0 && (
                    <div style={{ marginLeft: "1.5rem" }}>
                      <p>No Tasks Available</p>
                      <br />
                      <Button onClick={showTaskModal} icon={<PlusOutlined />}>
                        {" "}
                        ADD TASK
                      </Button>
                    </div>
                  )}


                  {item?.actualData?.map((items: any) => {
                    return (
                      <Col className="gutter-row" lg={6} md={6} sm={8} xs={12}>
                        <div
                          style={{
                            background: "#ffffff",
                            borderRadius: "10px",
                            padding: "10px 12px",
                          }}
                        >
                          <Row gutter={[12, 12]}>
                            <Col
                              className="gutter-row"
                              style={{ marginTop: "6px" }}
                            >
                              <span>{item.icon}</span>
                            </Col>
                            <Col className="gutter-row">
                              <div>
                                <p>{items.title}</p>
                                <p>{items.description}</p>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={5} offset={20}>
                              <div
                                className=""
                                style={{
                                  background: "",
                                  display: "flex",
                                  gap: "8px",
                                }}
                              >
                                <EditOutlined
                                  onClick={() => {
                                    handleEditor(item.categoryN, items.id);
                                    // handleEdit(item);
                                  }}
                                  style={{ color: "blue", fontSize: "1.2rem" }}
                                />
                                <DeleteOutlined
                                  style={{ color: "red", fontSize: "1.2rem" }}
                                  onClick={() => {
                                    dispatch(
                                      deleteTodo({
                                        id: items.id,
                                        category: item.categoryN,
                                      })
                                    );
                                    notifySuccess("Task Deleted successfully")
                                  }}
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Panel>
            </Collapse>
          </div>
        );
      })}
    </>
  );
};

export default NewTodo;
