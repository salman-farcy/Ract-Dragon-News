import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrifateRoute = ({children}) => {

     const { user, loding } = useContext(AuthContext);

     const location = useLocation()
     // console.log(location.pathname);

     if(loding){
          return <span className="loading loading-infinity loading-lg"></span>
     }

     if(user) {
          return children;
     }

     return <Navigate state={location.pathname} to="/login"></Navigate>;
}
export default PrifateRoute;