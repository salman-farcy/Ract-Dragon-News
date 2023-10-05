
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import  { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Login = () => {

     const { login } = useContext(AuthContext)
     const location = useLocation()
     const navigate = useNavigate()
     console.log('Location in tha login page', location);
     

     const handleLogin = e => {
          e.preventDefault();
          console.log(e.currentTarget);
          const form = new FormData(e.currentTarget);

          const name = form.get('name');
          const photo = form.get('photo');
          const email = form.get('email');
          const password = form.get('password');
          console.log(name, photo, email, password);

          login(email, password)
          .then(Result => {
               console.log(Result.user);
               // navigate after login
               navigate(location?.state ? location.state : '/')
          }) 
          .catch(error => {
               console.log(error);
               
          })
     }

     return (
          <div>
               <Navbar></Navbar>
               <div className="hero min-h-screen ">
                    <div className="hero-content flex-col ">
                    <h2 className="text-3xl font-semibold">Please Login</h2>
                         <div className="card flex-shrink-0  shadow-2xl bg-base-100">

                              <form onSubmit={handleLogin} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />


                                        <label className="label">
                                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                   </div>
                                   <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                   </div>
                              </form>

                              <p className="text-center pb-5 text-sm">Do not have an account <Link to="/register" className="text-indigo-500 underline text-base font-medium">Register</Link></p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;