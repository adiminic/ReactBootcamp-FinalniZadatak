import React from "react";
import { Button, Form, Input } from "antd";
import { useData } from "../utils/useData";

const LoginPage = (props) => {
  const { setIsLoggedIn } = useData();
  const onFinish = (values) => {
    setIsLoggedIn(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //const checkIfUserExists = () => {}

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-lg mt-5">Login</h1>
      <Form
        className="p-10"
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              required: true,
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min: 6,
              message: "Password must contain at least 6 characters",
            },
            {
              message:
                "Password must contain at least one number lowercase or uppercase character",
              validator: (_, value) => {
                if (
                  /^(.*[A-ZČĆĐŠŽ].*)$/.test(value) &&
                  /^(.*\d.*)$/.test(value) &&
                  /^(.*[a-zčćđšž].*)$/.test(value)
                ) {
                  return Promise.resolve();
                } else {
                  return Promise.reject("Some message here");
                }
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginPage;
