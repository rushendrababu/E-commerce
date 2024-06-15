import React from "react";
import Items from "./items";


const Itemlist=({items ,setselecteditem})=>{
    const rendereditems=items.map((item)=>{
        return(<Items item={item} key={item.product_id} setselecteditem={setselecteditem}/>)
    })
    return(
        <div className="ui relaxed divided list">{rendereditems}</div>
    )
}

export default Itemlist;