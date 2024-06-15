import React from "react";
import './itemcss.css'

const Singlehomeitem = ({ item,setselecteditem }) => {
    return (
        <div onClick={()=>setselecteditem(item)} className="ui card product-item">
            <div className="image">
                <img src={item.product_image} alt={item.product_title}/>
            </div>
            <div className="content">
                <div className="header">{item.product_title}</div>
                <div className="meta">
                <span className="price">{item.product_price}</span>
                </div>
                <div className="description">
                    {item.product_discription}
                </div>
            </div>
            <div className="extra content">
            <div className="ui right floated primary button">
                             Buy Now
                          <i className="right chevron icon"></i>
                    </div>
            </div>
        </div>
    )
}


export default Singlehomeitem;