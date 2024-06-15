import React,{useState} from "react";




const Searchbar=({onItemsubmit,homesearchitem})=>{
   
    const [item,setitem]=useState(homesearchitem)
  
    const Oninputchange=(evnet)=>{
        setitem(evnet.target.value)
    }
    const OnFormSubmit=(event)=>{
        event.preventDefault();
        onItemsubmit(item);
    }
      
    return(
        <div className="ui segment search-bar ">
            <form onSubmit={OnFormSubmit} className="ui form">
            <div className="field">
                <label>Enter Product Name</label>
                <input type='text' value={item} onChange={Oninputchange} />
            </div>
        </form>
        </div>
    )
}


export default Searchbar;