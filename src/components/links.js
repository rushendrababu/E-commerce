import React from "react";
import Changepage from "../customhook/changepagehook";

const Link=({className,children,href})=>{
    const [page,setpage]=Changepage()
    const forclicking=(event)=>{
        if(event.metaKey||event.ctrlKey){
            return
        }
        event.preventDefault();
        window.history.pushState({},"",href);
        const navEvent= new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        setpage(null)
        
    };
    return(
        <a onClick={forclicking} href={href} className={className}>{children}</a>
    )
}


export default Link;