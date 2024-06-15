import React from "react";
import './itemcss.css'


const Items=({item,setselecteditem})=>{
    return(
        <div onClick={()=>setselecteditem(item)} className="ui items product-item">
            <div className="item">
                 <div className="ui small image">
                    <img src={item.product_image} alt={item.product_title}/>
                 </div>
                 <div className="content">
                    <div className="header">
                        {item.product_title}
                    </div>
                    <div className="meta">
                        <span className="price">{item.product_price}</span>
                    </div>
                    <div className="discription">
                        {item.product_discription}
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Items;