import data from "./Data.json";
import DisplayItem from "./DisplayItem";
import { useState } from "react";

function Cards() {
 const[btn , setBtn] =useState(false)
 const showHandler=()=>{
  setBtn(true)
  
}
const hideBtn=()=>{
  setBtn(false);
}
  return (
   
    <div style={{marginTop:"100px"}}><div class="container">
      {btn && <DisplayItem  />}
      {btn?<button onClick={hideBtn}>Hide</button>:<button onClick={showHandler}>Show</button>}
      {/* <button onClick={showHandler}>List</button> */}
    <div class="row">
      {data.tasks.map((item )=>{return(item.assets.map((elem)=>{return(<div key={elem.asset_id} style={{marginBottom:"30px"}} class="col">
      <div class="card"  style={{width: "18rem"}}>
      <h5 style={{backgroundColor:"green" , textAlign:"center" ,borderRadius:"2px" , border:"1px solid black"}}
      class="card-title">{elem.asset_title}</h5>
        {elem.display_asset_image==null?null:<img src={elem.display_asset_image} class="card-img-top" alt="..."/>}
        {elem.display_asset_video==null?null:<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src={elem.display_asset_video} allowfullscreen></iframe>
 </div>}
  <div class="card-body">
    <p class="card-text">{elem.asset_description}</p>
  </div>
      </div>
</div>)})
)})}
      
    </div>
  </div>
     
    </div>
  );
}

export default Cards;
