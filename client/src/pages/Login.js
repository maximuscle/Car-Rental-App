import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/userActions";

function Login() {
  const dispatch = useDispatch();
  function onFinish(values) {
    dispatch(userLogin(values));
    console.log(values);
  }
  return (
    <div className="login">
      <Row gutter={8}>
        <Col lg={8} className="text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1 className="login-heading">Login</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <input type="password" />
            </Form.Item>
            <button className="btn2 mt-2 mb-3">Login</button>
            <br />
            <Link to="/register">Click here to Register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;