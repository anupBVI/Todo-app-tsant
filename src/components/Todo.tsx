import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Col, Collapse, Row } from 'antd'
import React from 'react'
import { IData } from '../pages/home'

interface TodosProps {
    data: {
        categoryN: string;
        icon: React.ReactNode;
        actualData: {
          id: string;
          title: string;
          description: string;
          url: string;
          isCompleted: boolean;
        }[];
    }[];
    showModal : () => void
    handleDelete2: (c: string, id: string) => void;
    handleEdit2: (c: string, id: string) => void;
    // handleComplete: (id: string) => void;
    // show: boolean;
    // setOpen:any
  }

const Todo = (props : TodosProps) => {
    const {data , handleDelete2 , handleEdit2 , showModal} = props

    const { Panel} = Collapse
  return (
    <>
            
    {props.data.map((item, index) => {
        const Head = (
          <div style={{width:"200px"}}>
            <span style={{fontWeight:"500" , fontSize:"1.1rem" , color:"#3e3e3e"}}>
             
              {item.categoryN} <small>({item.actualData?.length})</small>{" "}
            </span>
          </div>
        );
        return (
          <Collapse defaultActiveKey={["1"]} ghost expandIconPosition={"end"} className="testi" >
            <Panel header={Head} key={index + 1} >
              <Row gutter={[12, 12]} className="">
                {item?.actualData.length === 0 && (
                  <div style={{marginLeft:"1.5rem"}}>
                    <p>No Tasks Available</p>
                    <br />
                    <Button onClick={showModal} icon={<PlusOutlined />}>
                      {" "}
                      ADD COLLECTION
                    </Button>
                  </div>
                )}
                {item?.actualData?.map((dItem:any) => {
                  return (
                    <Col className="gutter-row" lg={6} md={8} sm={12} xs={12}>
                      <div
                        className="Test-Card"
                        style={{ padding: ".5rem 1rem" }}
                      >
                        <Row
                          gutter={[2, 2]}
                          className=""
                          style={{
                            background: "",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "start",
                          }}
                        >
                          <Col className="gutter-row" lg={4}>
                            <div style={{ marginTop: "6px" }}>{item.icon}</div>
                          </Col>
                          <Col className="gutter-row" lg={16}>
                            <div
                              style={{
                                display: "flex",
                                gap: "2px",
                                flexDirection: "column",
                              }}
                            >
                              <span>{dItem.title}</span>
                              <span>{dItem.description}</span>
                            </div>
                          </Col>
                        </Row>

                        <Row gutter={[12, 12]} className="">
                          <Col className="gutter-row" offset={18} lg={6}>
                            <div style={{ display: "flex", gap: "10px" }}>
                              <EditOutlined
                                style={{ color: "blue", fontSize: "1.2rem" }}
                                onClick={() => {
                                  handleEdit2(item.categoryN, dItem.id);
                                }}
                              />
                              <DeleteOutlined
                                style={{ color: "red", fontSize: "1.2rem" }}
                                onClick={() => {
                                  handleDelete2(item.categoryN, dItem.id);
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
        );
      })}
    </>
  )
}

export default Todo