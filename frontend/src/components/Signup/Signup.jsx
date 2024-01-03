import React, { useState } from "react";
import "./Signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
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
      .post(`${window.location.origin}/api/v1/register`, Inputs)
      // .post(`/api/v1/register`, Inputs)
      .then((res) => {
        if (res.data.massage === "User Already Exists") {
          alert(res.data.massage);
          navigate("/signin");
        } else {
          alert(res.data.massage);
          setInputs({ email: "", username: "", password: "" });
          navigate("/signin");
        }
      });
  };
  return (
    <Container className="mt-5 signup">
      <Row className="justify-content-center ">
        <Col md={6} className="">
          <Card>
            <Card.Header>
              <h4 className="text-center">Sign Up</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>
                    <FaUser /> Username:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    onChange={change}
                    value={Inputs.username}
                    name="username"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>
                    {" "}
                    <FaEnvelope /> Email:
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    onChange={change}
                    value={Inputs.email}
                    name="email"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword ">
                  <Form.Label>
                    <FaLock /> Password:
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    onChange={change}
                    value={Inputs.password}
                    name="password"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  block
                  onClick={submit}
                  className="my-3"
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
