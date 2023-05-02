import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  useTitle("Register")
  const { createUser, updateUserProfile, userEmailVarify } =
    useContext(AuthContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imgURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        handleUserProfileUpdate(name, imgURL);
        handleEmailVarify();
        toast.success("Please, varify your email");
      })
      .catch((e) => console.error(e));
  };

  const handleUserProfileUpdate = (name, imgURL) => {
    const profile = { displayName: name, photoURL: imgURL };
    updateUserProfile(profile)
      .then(() => {
        console.log("profile updated");
      })
      .catch((e) => console.error(e));
  };

  const handleEmailVarify = () => {
    userEmailVarify()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const handleTermsConditions = (e) => {
    setAccepted(e.target.checked);
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
      <h2 className="text-center">Register</h2>
      <Form onSubmit={handleFormSubmit} style={formStyle}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Give photoURL"
            required
          />
        </Form.Group>
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
        <Form.Group
          onClick={handleTermsConditions}
          className="mb-3"
          id="formGridCheckbox"
        >
          <Form.Check
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">Terms & Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          disabled={!accepted}
          style={{ width: "100%" }}
        >
          Register
        </Button>
        <p className="mt-2">
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
