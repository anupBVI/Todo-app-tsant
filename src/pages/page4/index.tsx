import React, { ChangeEvent, FC, FormEvent, useRef, useState } from "react";

import { StyledContainer } from "../../styles/Styles";
import Header from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";

import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import { GlobalOutlined, PlusOutlined } from "@ant-design/icons";
import { addCategory, addTodo, editTodo } from "../../redux/Todos/TodoActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Page4: FC = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.todos);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const { Option } = Select;
  // const { Panel } = Collapse;

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
    setCategoryList([...categoryList, { name: values.category, icon: x.icon }]);
    notifySuccess("Task Category Created Successfully")
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
      notifySuccess("Task Added Successfully")
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

        {/* :::::::::::::::::::::     CATEGORY    :::::::::::::::::::: */}
        <Col className="gutter-row" lg={4} md={3} sm={2} xs={2}>
          <div className="content">
            <Button onClick={showCategoryModal} icon={<PlusOutlined />}>
              {" "}
              ADD CATEGORY
            </Button>
            {/* MODAL FOR CATEGORY  */}
            <Modal
              open={openCategory}
              onOk={handleOkCategory}
              onCancel={handleCancelCategory}
              footer={false}
            >
              <Row gutter={[24, 12]} className="row-wrapper">
                <Col className="gutter-row" lg={24} md={24} sm={16} xs={24}>
                  <div className="content">
                    <Form
                      form={form2}
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      layout="horizontal"
                      onFinish={onFinishCategory}
                      onFinishFailed={onFinishCategoryFailed}
                      initialValues={{ remember: true }}
                    >
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
                            <Button block onClick={handleCancelCategory}>
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
            {/* MODAL FOR CATEGORY  */}

          </div>
        </Col>
        {/* :::::::::::::::::::::     CATEGORY    :::::::::::::::::::: */}

        {/* :::::::::::::::::::::     TASK    :::::::::::::::::::: */}

        <Col className="gutter-row" lg={4} md={3} sm={2} xs={2}>
          <div className="content">
            <Button onClick={showTaskModal} icon={<PlusOutlined />}>
              {" "}
              ADD TASK
            </Button>
            {/* MODAL FOR TASK  */}
            <Modal
              open={openTask}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={false}
            >
              <Row gutter={[24, 12]} className="row-wrapper">
                <Col className="gutter-row" lg={24} md={24} sm={16} xs={24}>
                  <div className="content">
                    <Form
                      form={form}
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      layout="horizontal"
                      onFinish={onFinishTask}
                      // onFinishFailed={onFinishTaskFailed}
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
                        initialValue={"General"}
                        label="Category"
                      >
                        <Select>
                          {categoryList.map((item: any) => {
                            return (
                              <Option key={item.name} value={item.name}>
                                {item.name}
                              </Option>
                            );
                          })}
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
            {/* MODAL FOR TASK  */}
          </div>
        </Col>
        {/* :::::::::::::::::::::     TASK    :::::::::::::::::::: */}
      </Row>

      <NewTodo
        state={state}
        handleEditor={handleEditor}
        showTaskModal={showTaskModal}
        notifySuccess={notifySuccess}
      />
    </StyledContainer>
  );
};

export default Page4;
