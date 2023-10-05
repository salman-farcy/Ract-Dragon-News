import { Outlet } from "react-router-dom";




const MainLayoute = () => {
     return (
          <div className="container mx-auto font-Poppins">
               <Outlet></Outlet>
          </div>
     );
};

export default MainLayoute;