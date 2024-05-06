import Cookies from "js-cookies";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const token = Cookies.getItem("jwtToken");
  
  console.log(token);

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, []);

  return <Component />;
};

export default ProtectedRoute;
