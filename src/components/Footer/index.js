import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

const Footer = () => (
  <p className="text-center py-3">
  ©2018 Mustang Bulletin | <Link to={routes.ABOUT}>About Mustang Bulletin</Link>
  </p>
);

export default Footer;
