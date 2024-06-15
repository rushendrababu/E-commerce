import React from "react";
import Headers from "./header";
import Home from "./home";
import Route from "./Router";


const App =()=>{
    
 
    
    

    return(
          <div className="ui container">
            <Headers/>
            <Route path="/">

                    <Home/>
                </Route>
                
          </div>
        
            
        
    )
}


export default App;