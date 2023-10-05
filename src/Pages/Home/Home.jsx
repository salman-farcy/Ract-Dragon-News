import { useLoaderData } from "react-router-dom";
import BrakingNews from "../../Components/BrakingNews/BrakingNews";
import Header from "../Shared/Header/Header";
import LefttSideNave from "../Shared/LeftSideNave/LefttSideNave";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNave from "../Shared/RightSideNave/RightSideNave";
import NewsCard from "../Shared/NewsCard/NewsCard";




const Home = () => {

     const allNews = useLoaderData();
     console.log(allNews );
     

     return (
          <div className="px-4">
               <Header></Header>
               <BrakingNews></BrakingNews>
               <Navbar></Navbar>

               <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                    <div className="">
                         <LefttSideNave></LefttSideNave>
                    </div>

                    <div className="lg:col-span-2">
                         <h2 className="font-semibold text-xl mb-3">Dragon News Home</h2>

                         
                         {
                              allNews.map(news => <NewsCard key={news.id}  news={news}></NewsCard>)
                         }
                         
                    </div>

                    <div className="">
                         <RightSideNave></RightSideNave>
                    </div>
               </div>
          </div>
     );
};

export default Home;