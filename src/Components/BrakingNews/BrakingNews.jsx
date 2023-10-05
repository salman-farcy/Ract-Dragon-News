
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BrakingNews = () => {
     return (
          <div className="flex bg-[#F3F3F3] p-3 gap-4 my-6 ">
               <button type="button" className="px-2 py-2 text-sm font-medium text-white bg-[#D72050]">Latest</button>
               <Marquee pauseOnHover={true} speed={100} >
                    <Link to="/" className="mr-10">Match Highlights: Germany vs Spain — as it happened    !   Match Highlights: Germany vs Spain as..........</Link> 
                    <Link to="/" className="mr-10">Match Highlights: Germany vs Spain — as it happened    !   Match Highlights: Germany vs Spain as..........</Link> 
                    <Link to="/" className="mr-10">Match Highlights: Germany vs Spain — as it happened    !   Match Highlights: Germany vs Spain as..........</Link> 
               </Marquee>
          </div>
     );
};

export default BrakingNews;