import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { loginUser, setLoader } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle('Login')
  const from = location?.state?.from?.pathname || "/";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Your email isn't varify. Please varify your email");
        }
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setLoader(false);
      });
  };

  const formStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    padding: "10px 20px",
    width: "60%",
    margin: "5px auto",
  };

  return (
    <div>
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleFormSubmit} style={formStyle}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary" style={{ width: "100%" }}>
          Login
        </Button>
        <p className="mt-2">
          Haven't Account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
