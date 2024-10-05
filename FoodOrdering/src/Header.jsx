import img from  './assets/logo.png';
import './Header.css'
const Header = () =>{
    return (
<div className="header">
  <div className="header-logo"> <img src={img} alt="" />
  </div> 
  <div className='nav-bar'>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact US</li>
      <li>Cart</li>
    </ul>
    </div> 
</div>    
)};
 
export default Header;