import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../Layoute/MainLayoute";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDtail from "../Pages/Shared/NewsDtail/NewsDtail";
import PrifateRoute from "../PrivateRoute/PrifateRoute";




const myRouterCreate = createBrowserRouter([
     {
          path: '/',
          element: <MainLayoute></MainLayoute>,
          children: [
               {
                    path:'/',
                    element: <Home></Home>,
                    loader: () => fetch('/../../public/data/news.json')
               },
               {
                    path: '/news/:id',
                    element: <PrifateRoute><NewsDtail></NewsDtail></PrifateRoute>
               },
               {
                    path:'/about',
                    element: <About></About>
               },
               {
                    path:'/career',
                    element: <Career></Career>
               },
               {
                    path:'/login',
                    element: <Login></Login>
               },
               {
                    path:'/register',
                    element: <Register></Register>
               },
          ]
     },
])


export default myRouterCreate;