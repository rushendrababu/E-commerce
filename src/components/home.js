import React ,{useEffect, useState}from "react";
import Api from "../backend/Api";
import Homeitems from "./hameitems";

const Home=()=>{
    const [alldata,setalldata]=useState([])
    useEffect(()=>{
        
     const Homecall=async()=>{

         const responce=await Api.get('/alldata')
         setalldata(responce.data)

     }
     Homecall();
 

    },[])
    return(
        
        <div className="ui container">
            
            <Homeitems items={alldata} />
        </div>
    )
}


export default Home;