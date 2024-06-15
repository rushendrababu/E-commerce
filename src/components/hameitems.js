import React, { useState } from "react";
import Singlehomeitem from "./homeitemrend";
import Searchbar from "./Searchbar";
import Siearchpage from "./searchpage";
import Changepage from "../customhook/changepagehook";

const Homeitems=({items})=>{
    const [homesearchitem,sethomesearchitem]=Changepage("");
    const onItemsubmit=(item)=>{
        sethomesearchitem(item)
    }
    
    const rendreditems=items.map((item)=>{
        return(
          <Singlehomeitem item={item} />
        )
    })
    return(
        <div>
           {homesearchitem ? 
                    <Siearchpage homesearchitem={homesearchitem} />
                : <div>
        <div className="ui container"><Searchbar onItemsubmit={onItemsubmit} /></div>
        <div className="ui four cards">{rendreditems}</div>
        </div>}
        </div>
    )
}


export default Homeitems;