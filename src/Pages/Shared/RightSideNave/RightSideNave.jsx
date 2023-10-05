
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/Fa';
import { BsGithub, BsInstagram } from 'react-icons/Bs';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'




const RightSideNave = () => {
     return (
          <div className="">
               <div className='space-y-3  mb-7'>
                    <h2 className="font-semibold text-xl ">Login With</h2>

                    <div className="border  p-1 rounded-md flex items-center justify-center gap-2 text-sky-500">
                         <FaGoogle></FaGoogle>
                         <p className="text-sm text-center">Login With Google</p>
                    </div>

                    <div className="border  p-1 rounded-md flex items-center justify-center gap-2">
                         <BsGithub></BsGithub>
                         <p className="text-sm text-center">Login With GitHub</p>
                    </div>
               </div>

               <div className=' space-y-3 mb-7'>
                    <h2 className="font-semibold text-xl ">Find Us On</h2>

                    <div className="border rounded-md mt-6">
                         <div className="py-4 px-5 flex items-center  gap-3 ">
                              <div className="text-blue-500">
                                   <FaFacebookF></FaFacebookF>
                              </div>
                              <p className="text-sm text-center">Facebook</p>
                         </div>

                         <div className="border-y py-4 px-5  flex items-center  gap-3">
                              <div className="text-blue-500">
                                   <FaTwitter></FaTwitter>
                              </div>
                              <p className="text-sm text-center">Twitter</p>
                         </div>

                         <div className="py-4 px-5 flex items-center  gap-3">
                              <div className="text-blue-500">
                                   <BsInstagram></BsInstagram>
                              </div>
                              <p className="text-sm text-center">Instagram</p>
                         </div>
                    </div>
               </div>

               <div className="bg-[#F3F3F3] mb-5">
                    <h2 className='font-semibold text-xl p-4'>Q-Zone</h2>

                    <div className="pb-5 px-3 space-y-5">
                         <img className='mx-auto' src={QZone1} alt="" />
                         <img className='mx-auto' src={QZone2} alt="" />
                         <img className='mx-auto' src={QZone3} alt="" />
                    </div>
               </div>
          </div>
     );
};

export default RightSideNave;