import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";



const LefttSideNave = () => {
     const [categories, setCategories] = useState([]);

     useEffect(() => {
          fetch('../../../../public/data/categories.json')
               .then(res => res.json())
               .then(data => setCategories(data))
     }, [])

     return (
          <div>
               <h2 className="font-semibold text-xl mb-3">All Caterogy</h2>

               {
                    categories.map(category => <NavLink to={`/category/${category.id}`} key={category.id} className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-black bg-slate-200" : ""
                    }><p className="hover:bg-slate-200 font-medium text-slate-400 text-sm py-2 ps-10  mb-1 rounded-md "> {category.name}</p></NavLink>)
               }
          </div>
     );
};

export default LefttSideNave;