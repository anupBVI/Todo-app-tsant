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
import { IData } from "../pages/home";
import {
  addCategory,
  addTodo,
  deleteTodo,
  editTodo,
} from "../redux/Todos/TodoActions";
import Icon from "./Icons/Icon";
import { v4 as uuidv4 } from "uuid";

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
  showModal: () => void;
  handleDelete: (c: string, id: string) => void;
  handleEdit: (c: string, id: string) => void;
  // handleEdit: (item : IData) => void;
  // handleComplete: (id: string) => void;
  // show: boolean;
  // setOpen:any
}

const Todo = (props: TodosProps) => {
  const { data, handleDelete, handleEdit, showModal } = props;
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.todos);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const { Option } = Select;
  const { Panel } = Collapse;

  const [categoryList, setCategoryList] = useState(
    state.map((item: any) => {
      return { name: item.categoryN, icon: item.icon };
    })
  );





  const [loading, setLoading] = useState(false);
  const [updateBtn, setUpdateBtn] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openTask, setOpenTask] = useState(false);

  const [idToUpdate, setIdToUpdate] = useState("");
  const [categoryToUpdate, setCategoryToUpdate] = useState("");

  const handleOkTask = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenTask(false);
    }, 3000);
  };

  const handleCancelTask = () => {
    setOpenTask(false);
    form.resetFields();
    setUpdateBtn(false);
  };

  const showTaskModal = () => {
    setOpenTask(true);
  };

  const handleOkCategory = () => {
    alert("OK clicked");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenTask(false);
    }, 3000);
  };

  const handleCancelCategory = () => {
    setOpenCategory(false);
    form2.resetFields();
    setUpdateBtn(false);
  };

  const showCategoryModal = () => {
    setOpenCategory(true);
  };

  const onFinishCategory = (values: any) => {
    const x = {
      categoryN: values.category,
      icon: <GlobalOutlined style={{ fontSize: "1.3rem", color: "green" }} />,
      actualData: [],
    };
    dispatch(addCategory(x));

    setCategoryList([...categoryList,{name:values.category , icon:x.icon}])

    // showCategoryModal(false)
    handleCancelCategory();
  };

  const onFinishCategoryFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinishTask = (values: any) => {
    const { category, title, description, url } = values;
    if (!updateBtn) {
      console.log("No update button");
      const todo = {
        category,
        icon: "icon",
        id: uuidv4(),
        title,
        description,
        url,
        isCompleted: false,
      };
      dispatch(addTodo(todo));
    }

    if (updateBtn) {
      console.log("update button ");

      dispatch(
        editTodo({ id: idToUpdate, category: categoryToUpdate, values: values })
      );

      handleCancel();
    }
    handleCancelTask();
  };

  const handleEditor = (category: string, id: string) => {
    // console.log(first)
    showTaskModal();
    setUpdateBtn(true);
    setIdToUpdate(id);
    setCategoryToUpdate(category);

    const xx = state.find((x: any) => x.categoryN === category);
    const yy = xx?.actualData.find((x: any) => x.id === id);

    form.setFieldsValue({
      id: yy?.id,
      title: yy?.title,
      description: yy?.description,
      url: yy?.url,
      category: category,
    });
  };

  const handleOk = () => {
    alert("OK clicked");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenTask(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpenTask(false);
    form.resetFields();
    setUpdateBtn(false);
  };

  return (
    <>
     

      {/* WITHOUT REDUX */}

      <div>
        {props.data.map((item, index) => {
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
            <Collapse
              defaultActiveKey={["1"]}
              ghost
              expandIconPosition={"end"}
              className="testi"
            >
              <Panel header={Head} key={index + 1}>
                <Row gutter={[12, 12]} className="">
                  {item?.actualData.length === 0 && (
                    <div style={{ marginLeft: "1.5rem" }}>
                      <p>No Tasks Available</p>
                      <br />
                      <Button onClick={showModal} icon={<PlusOutlined />}>
                        {" "}
                        ADD COLLECTION
                      </Button>
                    </div>
                  )}
                  {item?.actualData?.map((dItem: any) => {
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
                              <div style={{ marginTop: "6px" }}>
                                {item.icon}
                              </div>
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
                                    handleEdit(item.categoryN, dItem.id);
                                    // handleEdit(item);
                                  }}
                                />
                                <DeleteOutlined
                                  style={{ color: "red", fontSize: "1.2rem" }}
                                  onClick={() => {
                                    handleDelete(item.categoryN, dItem.id);
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
      </div>
    </>
  );
};

export default Todo;
