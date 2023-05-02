import React, { useContext } from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="">
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle /> Signin with Google
        </Button>
        <Button variant="outline-primary">
          <FaFacebook /> Signin with Facebook
        </Button>
      </ButtonGroup>
      <div className="mt-4 pointer">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaGithub /> Github
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item>
            <FaYoutube /> YouTube
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instragram
          </ListGroup.Item>
          <ListGroup.Item> Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
