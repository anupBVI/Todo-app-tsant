import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import Icon from "../Icons/Icon";

type CardProps = {
  data: {
    id: string;
    title: string;
    description: string;
    url: string;
    category: string;
  }[];
  icon: any;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
  handleComplete: (id: string) => void;
  setOpen: any;
};

const Card = (props: CardProps) => {
  const { data, icon, handleDelete, handleEdit, handleComplete, setOpen } =
    props;
  return (
    <Row gutter={[12, 12]} className="row-wrapper">
      {data.length == 0 && (
        <>
          <div style={{ display: "flex", flexDirection:"column", gap: "14px" }}>
            <h5>No Tasks Available </h5>
           

            <Button
              onClick={() => {
                setOpen(true);
              }}
              icon={<PlusOutlined />}
            >
              {" "}
              ADD COLLECTION
            </Button>
          </div>
        </>
      )}
      {data.map((item, index) => {
        return (
          <Col
            key={item.id}
            className="gutter-row"
            lg={6}
            md={8}
            sm={12}
            xs={12}
          >
            <div className="content">
              {/* <Row gutter={[12, 12]} className="row-wrapper">
                <Col className="gutter-row" span={4} style={{background:"orange"}}>
                  Lorem
                </Col>
                <Col className="gutter-row" span={18} style={{background:"orange"}}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque voluptatibus rerum natus.
                </Col>
               
              </Row>    
              <Row style={{background:"orange"}}>
                <Col span={24} offset={15}>
                  edit , delete
                </Col>
              </Row>{" "} */}
              <div>
                <Icon text={icon} />
                <span style={{ fontWeight: "500" }}>
                  {item?.title}
                  <small>{item?.description}</small>
                </span>
              </div>
              <Row>
                <Col span={2} offset={22}>
                  {/* <span>
                    <EditOutlined
                      onClick={() => {
                        handleComplete(item.id);
                        // console.log(item)
                      }}
                      style={{ color: "blue", fontSize: "1.1rem" }}
                    />
                  </span> */}
                  <span>
                    <EditOutlined
                      onClick={() => {
                        handleEdit(item.id);
                        // console.log(item)
                      }}
                      style={{ color: "blue", fontSize: "1.1rem" }}
                    />
                  </span>
                  <span>
                    <DeleteOutlined
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      style={{ color: "red", fontSize: "1.1rem" }}
                    />
                  </span>
                </Col>
              </Row>
              {/* <div>
              <Button text="Edit" />
              <Button text="Delete" />
            </div> */}
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Card;
