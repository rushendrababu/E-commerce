import { useEffect,useState } from "react";

  const Route=({path,children})=>{
    const [currentpath,setcurrentpath]=useState(window.location.pathname)
    const onLocationchange=()=>{
      setcurrentpath(window.location.pathname)
    }
    useEffect(()=>{
      window.addEventListener('popstate',onLocationchange)
      return ()=>{
        window.removeEventListener('popstate',onLocationchange)
      }
    },[])
    return currentpath===path ? children :null;
  }



  export default Route;


