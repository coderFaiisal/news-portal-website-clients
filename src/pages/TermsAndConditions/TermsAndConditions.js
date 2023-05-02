import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h2>Terms and Conditions :</h2>
      <ul>
        <li>We will use your info</li>
        <li>Will send promotion email</li>
      </ul>
      <p>
        Go back : <Link to="/register">Registration</Link>
      </p>
    </div>
  );
};

export default TermsAndConditions;
