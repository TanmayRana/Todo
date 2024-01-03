import React, { useState } from "react";
import "./Signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/v1/signin`, Inputs)
      // .post(`/api/v1/signin`, Inputs)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("id", res.data.user._id);
        dispatch(authActions.login());
        navigate("/todo");
      });
  };
  return (
    <Container className="mt-5 signup ">
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h4 className="text-center">Sign Up</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formEmail" className="my-2">
                  <Form.Label>
                    <FaEnvelope /> Email:
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={Inputs.email}
                    onChange={change}
                    name="email"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="my-2">
                  <Form.Label>
                    <FaLock /> Password:
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={Inputs.password}
                    onChange={change}
                    name="password"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  block
                  className="my-3"
                  onClick={submit}
                >
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
