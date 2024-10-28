import img from  './assets/logo.png';
import {Link} from "react-router-dom"
const Header = () =>{
    return (
<div className="flex justify-between items-center">
  <div className="w-20"> <img src={img} alt="" />
  </div> 
  
    <ul className='flex'>
      <li className='mx-4'><Link to="/">Home</Link></li>
      <li className='mx-4'><Link to="/about">About Us</Link></li>
      <li className='mx-4'>Contact US</li>
      <li className='mx-4'><Link to ="/grocery">Grocery</Link></li>
      <li className='mx-4'>Cart</li>
    </ul>
</div>     
)};
 
export default Header;