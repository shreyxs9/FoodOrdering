import './Body.css';
import img from  './assets/logo.png';

const ResCards = ()=>{
    return(
        <div className="card">
       <img src={img} alt="" />
       <div className="card-text">
        <h3>Megahana foods</h3>
        </div>
       </div> 
    );
};

const Body = () =>{
return (
    <div className="body-comp">
        <div className='search'>Search</div>
        <ResCards/>
    </div>
);
};
export default Body;