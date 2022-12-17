import React from 'react'
import data from "./Data.json";
function DisplayItem() {
  return (
    <div>
     
{data.tasks.map((item)=>{return(item.assets.map((elem)=>{return(<div key={elem.asset_id}>

  <div class="container">
  <div class="row">
    <div class="col-sm">
      {elem.asset_title}
    </div>
   
  </div>
</div>

</div>)}))})}
    </div >
  )
}

export default DisplayItem
