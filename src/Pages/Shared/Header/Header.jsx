
import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
     return (
          <div>
               <div className="text-center">
                    <img className='mx-auto pt-12 pb-4' src={logo} alt="" />
                    <p className='pb-4'>Journalism Without Fear or Favour</p>
                    <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
               </div>
          </div>
     );
};

export default Header;