import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";





const Register = () => {

     const {createUser} = useContext(AuthContext)

     const handleRegister = e => {
          e.preventDefault();
          console.log(e.currentTarget);
          const form = new FormData(e.currentTarget);

          const name = form.get('name');
          const photo = form.get('photo');
          const email = form.get('email');
          const password = form.get('password');
          
          console.log(name, photo, email, password);

          createUser(email, password)
          .then(result => {
               console.log(result.user)
          })
          .catch(error => {
               console.error(error);
               
          })
     }


     return (
          <div>
               <Navbar></Navbar>
               <div className="hero min-h-screen ">
                    <div className="hero-content flex-col ">
                    <h2 className="text-3xl font-semibold">Please Register</h2>
                         <div className="card flex-shrink-0  shadow-2xl bg-base-100">

                              <form onSubmit={handleRegister} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Name</span>
                                        </label>
                                        <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                                   </div>

                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="" name="photo" placeholder="Enter Your Photo URL" className="input input-bordered" required />
                                   </div>

                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                   </div>

                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />


                                        <label className="label">
                                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                   </div>

                                   <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                   </div>
                              </form>

                              <p className="text-center pb-5 text-sm">All Rady have an account <Link to="/login" className="text-indigo-500 underline text-base font-medium">Login</Link></p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;