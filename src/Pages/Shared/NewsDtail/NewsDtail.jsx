import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import RightSideNave from "../RightSideNave/RightSideNave";



const NewsDtail = () => {

     const { id } = useParams()
     console.log(id);

     return (
          <div className="p-4">
               <Header></Header>
               <Navbar></Navbar>

               <div className="flex flex-col lg:flex-row gap-5">

                    <div className="flex-1 border">
                         <h2 className="font-semibold text-xl ">Dragon News</h2>

                         {id}
                    </div>
                    <RightSideNave></RightSideNave>
               </div>
          </div>
     );
};

export default NewsDtail;