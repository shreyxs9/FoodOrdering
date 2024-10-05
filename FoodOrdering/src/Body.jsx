import './Body.css';
const ResCards = (props)=>{
    return(
        <div className="card">
       <img src={props.img} alt="" />
       <div className="card-text">
        <h3>{props.resName}</h3>
        <h4>{props.cusines}</h4>
<h4>4.4 stars</h4>
<h4>38 minutes</h4>
        </div>
       </div> 
    );
};

const Body = () =>{
return (
    <div className="body-comp">  
        <div className='search'>Search</div>
        <div className="rescollection">
        <ResCards resName="Megahana foods" cusines="Biryani, North Indian, Asian" img='./src/assets/biryani.jpg'/>
        <ResCards resName="KFC" cusines="fast food" img={"./src/assets/burger.jpg"}/>
        
        </div>
       
    </div>
);
};
export default Body;