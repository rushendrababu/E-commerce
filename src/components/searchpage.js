import Searchbar from "./Searchbar";
import Itemlist from "./itemslist";
import Api from "../backend/Api";
import Selecteditem from "./selecteditem";
import React,{useState,useEffect} from "react";



const Siearchpage=({homesearchitem})=>{
    const [results,setresults]=useState([])
    const [selecteditem,setselecteditem]=useState(results)
    useEffect(()=>{
        onItemsubmit(homesearchitem)
        
    },[])
    
    const onItemsubmit= async(item)=>{
        const responce= await Api.get('/data',{
            params:{
                productname:item
            }
        });
        if(!responce){
            return null
        }
        setresults(responce.data)
        setselecteditem(responce.data[0])
        
}

return(


    <div className="ui container">
            <Searchbar onItemsubmit={onItemsubmit} homesearchitem={homesearchitem}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        {selecteditem ?<Selecteditem item={selecteditem}/>:'No Data'}
                    </div>
                    <div className="five wide column">
                        <Itemlist items={results} setselecteditem={setselecteditem} />
                    </div>
                </div>
            </div>
            </div>
)


}



export default Siearchpage;