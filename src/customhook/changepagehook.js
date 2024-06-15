import React, { useState } from "react";


const Changepage=(defaultval)=>{
    const [homesearchitem,sethomesearchitem]=useState(defaultval)
    console.log(homesearchitem);
    return [homesearchitem,sethomesearchitem]
}


export default Changepage;