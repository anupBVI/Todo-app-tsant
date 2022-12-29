import React, { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import styled from "styled-components";
// import { v4 as uuidv4 } from 'uuid';
import { v4 as uuidv4 } from "uuid";

import {
  Row,
  Form,
  Col,
  Input,
  Button,
  Checkbox,
  Modal,
  Descriptions,
  Select,
  Collapse,
} from "antd";
import {
  GlobalOutlined,
  DownOutlined,
  UserOutlined,
  UnlockOutlined,
  PlusOutlined,
  LaptopOutlined,
  MailOutlined,
  NodeCollapseOutlined,
  NotificationOutlined,
  ReadOutlined,
  ForkOutlined,
  DatabaseFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Todos from "../../components/Todos";
import { StyledContainer } from "../../styles/Styles";
import Header from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { FormInstance } from "antd/es/form";
import { icons } from "antd/es/image/PreviewGroup";
import useItems from "antd/es/menu/hooks/useItems";
import { data } from "./../../components/TestData";
import Item from "antd/es/list/Item";

export interface IData {
  categoryN: string;
  icon: React.ReactNode;
  actualData: {
    id: string;
    title: string;
    description: string;
    url: string;
    isCompleted: boolean;
  }[];
}

interface INew {
  categoryN: string;
  icon: string;
  datas: {
    id: string;
    title: string;
    description: string;
    url: string;
    isCompleted: boolean;
  }[];
}

const Home2: FC = () => {
  const { Panel } = Collapse;

  // const formRef1 = React.createRef<FormInstance>();
  // const formRef2 = React.createRef<FormInstance>();
  const { Option } = Select;

  const InitialData = [
    {
      categoryN: "General",
      icon: <GlobalOutlined style={{ fontSize: "1.3rem", color: "green" }} />,
      actualData: [
        {
          id: uuidv4(),
          title: "Default 01",
          description: "Default Description",
          url: "Default Url",
          isCompleted: false,
        },
      ],
    },
  ];

  // const [form1] = Form.useForm();
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [updateBtn, setUpdateBtn] = useState(false);

  const [taskToUpdate, setTaskToUpdate] = useState("");
  const [catToUpdate, setCatToUpdate] = useState("");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<IData[]>(InitialData);
  const [open2, setOpen2] = useState(false);

  const [categoryList, setCategoryList] = useState(
    data.map((item) => {
      return { name: item.categoryN, icon: item.icon };
    })
  );

  const handleOk = () => {
    alert("OK clicked");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
    setUpdateBtn(false);
  };

  const showModal = () => {
    setOpen(true);
  };
  // :::::::::::::::::::::::::::::::::::::::::: NEW MODAL   ::::::::::::::::::::::::::::::::::::::::::::::
  const handleOk2 = () => {
    alert("OK clicked");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel2 = () => {
    setOpen2(false);
    form2.resetFields();
    setUpdateBtn(false);
  };

  const showModal2 = () => {
    setOpen2(true);
  };

  const onFinish2 = (values: any) => {
    if (!updateBtn) {
      console.log("Adding Data");
      const x = {
        categoryN: values.category,
        icon: <GlobalOutlined style={{ fontSize: "1.3rem", color: "green" }} />,
        actualData: [
          {
            id: uuidv4(),
            title: values.title,
            description: values.description,
            url: values.url,
            isCompleted: false,
          },
        ],
      };
      setData([...data, x]);

      setCategoryList([...categoryList, { name: x.categoryN, icon: x.icon }]);

      notifySuccess("Category Added Successfully");
      form2.resetFields();
      handleCancel2();
    }

    if (updateBtn) {
      console.log("updating Data");
      console.log("updating data");

      const newData = data.map((item) => {
        if (item.categoryN === catToUpdate) {
          return {
            ...item,
            actualData: item.actualData.map((dataItem) => {
              if (dataItem.id === taskToUpdate) {
                return {
                  ...dataItem,
                  title: values.title,
                  description: values.description,
                  url: values.url,
                  isCompleted: dataItem.isCompleted,
                };
              }
              return dataItem;
            }),
          };
        }
        return item;
      });

      setData(newData);

      notifySuccess("Task Updated Successfully");
      handleCancel2();
    }
  };

  const onFinishFailed2 = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  // :::::::::::::::::::::::::::::::::::::::::: NEW MODAL   ::::::::::::::::::::::::::::::::::::::::::::::

  const notifySuccess = (x: string) =>
    toast.success(x, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const onFinish = (values: any) => {
    const { title, description, category, url } = values;
    console.log("Success:", values);
    console.log("new form submitting");
    const xd = data.find((x) => x.categoryN === values.category);
    console.log(xd);

    // setData(
    //   data.map((item) => {
    //     if (item === xd) {
    //      return{
    //       ...item.actualData,
    //       title: values.title,
    //       description: values.description,
    //       url: values.url,
    //       isCompleted: dataItem.isCompleted,
    //      }
    //     }
    //     return item;
    //   })
    // );

    if (!updateBtn) {
      const id = {
        id: uuidv4(),
        isCompleted: false,
        ...values,
      };

      setData([...data, id]);
      form.resetFields();
      notifySuccess("Task Added SuccessFully");

      setTimeout(() => {
        handleCancel();
      }, 100);
    }
  };

  console.log(data);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleEdit2 = (c: string, id: string) => {
    console.log("edit button clicked");
    console.log(c);
    console.log(id);

    setUpdateBtn(true);
    setCatToUpdate(c);
    setTaskToUpdate(id);

    const xx = data.find((x) => x.categoryN === c);
    const yy = xx?.actualData.find((x) => x.id === id);

    showModal2();

    form2.setFieldsValue({
      id: yy?.id,
      title: yy?.title,
      description: yy?.description,
      url: yy?.url,
      category: c,
    });
    console.log(id);
  };

  const handleDelete2 = (c: string, id: string) => {
    console.log("Delete button clicked");
    console.log(c);
    console.log(id);

    setData(
      data.map((item) => {
        if (item.categoryN === c) {
          return {
            ...item,
            actualData: item.actualData.filter((data) => data.id !== id),
          };
        }
        return item;
      })
    );

    notifySuccess("Task Deleted SuccessFully");
  };

  // const handleComplete = (id: string) => {
  //   console.log(id);
  //   const xx = data.find((x) => x.id === id);
  // };

  return (
    <StyledContainer className="">
      <Header />
      <ToastContainer />
      <Row gutter={[3, 12]} className="row-wrapper-nav">
        <Col className="gutter-row" lg={3} md={3} sm={2} xs={2}>
          <div className="content">DRAG & DROP </div>
        </Col>
        <Col className="gutter-row" lg={3} md={3} sm={2} xs={2}>
          <div className="content">TAG FILTER</div>
        </Col>
        <Col className="gutter-row" lg={3} md={3} sm={2} xs={2}>
          <div className="content">VIEW</div>
        </Col>
        <Col className="gutter-row" lg={3} md={3} sm={2} xs={2}>
          <div className="content">EXPAND</div>
        </Col>
        <Col className="gutter-row" lg={3} md={3} sm={2} xs={2}>
          <div className="content">COLLAPSE</div>
        </Col>
        <Col className="gutter-row" lg={4} md={3} sm={2} xs={2}>
          <div className="content">
            <Button onClick={showModal2} icon={<PlusOutlined />}>
              {" "}
              ADD CATEGORY
            </Button>

            <Modal
              open={open2}
              onOk={handleOk2}
              onCancel={handleCancel2}
              footer={false}
            >
              <Row gutter={[24, 12]} className="row-wrapper">
                <Col className="gutter-row" lg={24} md={24} sm={16} xs={24}>
                  <div className="content">
                    <Form
                      // ref={formRef1}
                      form={form2}
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      layout="horizontal"
                      onFinish={onFinish2}
                      onFinishFailed={onFinishFailed2}
                      initialValues={{ remember: true }}
                    >
                      {!updateBtn && (
                        <Form.Item
                          name="category"
                          label="Enter Category"
                          rules={[
                            {
                              required: true,
                              message: "Please Enter any category name",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      )}

                      <Form.Item
                        // style={{ display: "none" }}
                        name="title"
                        label="Title"
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please Enter Task Title!",
                        //   },
                        // ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        // style={{ display: "none" }}
                        name="description"
                        label="Description"
                      >
                        <Input.TextArea />
                      </Form.Item>

                      <Form.Item
                        // style={{ display: "none" }}
                        name="url"
                        label="URL"
                      >
                        <Input />
                      </Form.Item>

                      <Row gutter={12}>
                        <Col span={6}>
                          <Form.Item wrapperCol={{ span: 24 }}>
                            <Button type="primary" danger block disabled>
                              Delete
                            </Button>
                          </Form.Item>
                        </Col>
                        <Col span={6} offset={6}>
                          <Form.Item wrapperCol={{ span: 24 }}>
                            <Button block onClick={handleCancel2}>
                              Cancel
                            </Button>
                          </Form.Item>
                        </Col>
                        <Col span={6}>
                          <Form.Item wrapperCol={{ span: 24 }}>
                            <Button type="primary" block htmlType="submit">
                              {updateBtn ? "Update" : "Save"}
                            </Button>
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* <Row gutter={12}>
                        <Col span={6}>
                          <Form.Item wrapperCol={{ span: 24 }}>
                            <Button type="primary" block htmlType="submit">
                              {updateBtn ? "Update" : "Save"}
                            </Button>
                          </Form.Item>
                        </Col>
                      </Row> */}
                    </Form>
                  </div>
                </Col>
              </Row>
            </Modal>
          </div>
        </Col>

        <Col className="gutter-row" lg={4} md={3} sm={2} xs={2}>
          <div className="content">
            <Button onClick={showModal} icon={<PlusOutlined />}>
              {" "}
              ADD COLLECTION
            </Button>

            <Modal
              open={open}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={false}
            >
              <Row gutter={[24, 12]} className="row-wrapper">
                <Col className="gutter-row" lg={24} md={24} sm={16} xs={24}>
                  <div className="content">
                    <Form
                      // ref={formRef2}
                      form={form}
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      layout="horizontal"
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      initialValues={{ remember: true }}
                    >
                      <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                          {
                            required: true,
                            message: "Please Enter Task Title!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        name="category"
                        label="Category"
                        // rules={[{ required: true }]}
                      >
                        <Select
                          placeholder="Select a category"
                          // onChange={onGenderChange}
                          allowClear
                        >
                          {categoryList.map((item, index) => (
                            <Option key={index} value={item.name}>
                              {item.name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item name="description" label="Description">
                        <Input.TextArea />
                      </Form.Item>

                      <Form.Item name="url" label="URL">
                        <Input />
                      </Form.Item>

                      <Row gutter={12}>
                        <Col span={6}>
                          <Form.Item wrapperCol={{ span: 24 }}>
                            <Button type="primary" danger block disabled>
                              Delete
                            </Button>
                          </Form.Item>
                        </Col>
                        <Col span={6} offset={6}>
                          <Form.Item wrapperCol={{ span: 24 }}>
                            <Button block onClick={handleCancel}>
                              Cancel
                            </Button>
                          </Form.Item>
                        </Col>
                        <Col span={6}>
                          <Form.Item wrapperCol={{ span: 24 }}>
                            <Button type="primary" block htmlType="submit">
                              {updateBtn ? "Update" : "Save"}
                            </Button>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Modal>
          </div>
        </Col>
      </Row>
      {/* <Navbar/> */}

      <Collapse defaultActiveKey={["1"]} ghost>
        {/* {testX.map((item, index) => {
          return (
            <Todos
              key={item.name}
              data={data.filter((elem) => {
                if (item.name == "All Tasks") {
                  return data;
                } else {
                  return elem.category === item.name;
                }
              })}
              setOpen={setOpen}
              category={item.name}
              icon={item.icon}
              defaultKey={item.name === "All Tasks" ? true : false}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleComplete={handleComplete}
              show={item.name === "All Tasks" && true}
            />
          );
        })} */}

        {data.map((item, index) => {
          return (
            <Panel header={item.categoryN} key={index + 1}>
              <Row gutter={[12, 12]} className="">
                {item?.actualData?.map((dItem, index) => {
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
          );
        })}
      </Collapse>

      {/* CATEGORIES */}

      {/* <Todos
        data={data.filter((item) => item.category === "general")}
        category="General"
        defaultKey={true}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      <Todos
        data={data.filter((item) => item.category === "technology")}
        category="Technology"
        defaultKey={false}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Todos
        data={data.filter((item) => item.category === "health")}
        category="Health & Hobbies"
        defaultKey={false}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Todos
        data={data.filter((item) => item.category === 'others')}
        category="Others"
        defaultKey={false}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Todos
        data={data}
        category="All"
        defaultKey={false}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      /> */}
    </StyledContainer>
  );
};

export default Home2;
