import { Button, Form, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ReactNode } from "react";

interface LoginTimerModalProps {
  Head: string;
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  totalLoggedInTime: string;
  halfDay: string;
  fullDay: string;
  compared: string;
  total:string
//   resultant :string
}

export const LoginTimerModal = (props: LoginTimerModalProps) => {
  const {
    Head,
    isModalOpen,
    handleOk,
    handleCancel,
    totalLoggedInTime,
    halfDay,
    fullDay,
    compared,
    total
  } = props;


  return (
    <Modal
      title={Head}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelText="Cancel"
      okText="Stop Anyway"
    //   footer={totalLoggedInTime >= fullDay && null}
    >
      {totalLoggedInTime < halfDay && (
        <p style={{ color: "#484848", fontSize: "18px" }}>
            {/* {resultant} */}
            <br />
          Hey ! Your total time logged for today is {total} which is{" "}
          {compared} than half day, logged in hours will not be counted as half
          day. Stop Anyway !
        </p>
      )}
      {totalLoggedInTime > halfDay && totalLoggedInTime < fullDay && (
        <p style={{ color: "#484848", fontSize: "18px" }}>
          Hey ! Your total time logged for today is {total} which is{" "}
          {compared} than full day, logged in hours will be counted as half day.
          Stop Anyway !
        </p>
      )}
      {totalLoggedInTime >= fullDay && (
        <p style={{ color: "#484848", fontSize: "20px" }}>
          Thank you! You have completed your Work Hours successfully.
        </p>
      )}
    
      {/* <div style={{marginTop:"10px"}}>
        <Button type={"primary"} onClick={handleMod}>Logout for today</Button>
      </div> */}
    </Modal>
  );
};

interface BreakTimerModalProps {
  HeadBreak: string;
  isModalOpenBreak: boolean;
  handleOkBreak: () => void;
  handleCancelBreak: () => void;
  onFinishBreak: any;
  formBreak: any;
}

export const BreakTimerModal = (props: BreakTimerModalProps) => {
  const {
    HeadBreak,
    isModalOpenBreak,
    handleOkBreak,
    handleCancelBreak,
    onFinishBreak,
    formBreak,
  } = props;
  const { Option } = Select;

  return (
    <Modal
      title={HeadBreak}
      open={isModalOpenBreak}
      onOk={handleOkBreak}
      onCancel={handleCancelBreak}
      cancelText="Cancel"
      okText="Submit"
      footer={null}
    >
      <Form layout="vertical" form={formBreak} onFinish={onFinishBreak}>
        <Form.Item
          name="title"
          label="Select Break"
          rules={[
            {
              required: true,
              message: "Please Select Break Option!",
            },
          ]}
        >
          <Select
            placeholder="Select Break"
            // onChange={onGenderChange}
            allowClear
          >
            <Option value="lunch">Lunch</Option>
            <Option value="coffee">Coffee</Option>
            <Option value="activity">Activity</Option>
          </Select>
        </Form.Item>

        <Form.Item name="description" label="Break Description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: "#0ea6fe", width: "100%" }}
          >
            Submit
          </Button>
        </Form.Item>
        <br />
      </Form>
    </Modal>
  );
};
