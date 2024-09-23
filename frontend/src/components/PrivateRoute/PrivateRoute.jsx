// // PrivateRoute.js

// import { useNavigate } from "react-router-dom";


import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return children;
  } else {
    navigate('/');
    return null; 
  }
};

export default PrivateRoute;
