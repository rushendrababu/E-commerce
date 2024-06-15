import React from "react";


const Selecteditem=({item})=>{
    return(
        <div className="ui very padded segment">
        <div className="ui item">
            <div className="item">
                 <div className="ui image">
                    <img style={{width:'400px',height:'400px'}} src={item.product_image} alt={item.product_title}/>
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
                    <div className="extra">
                    <div className="ui right floated primary button">
                             Buy Now
                          <i className="right chevron icon"></i>
                    </div>
                    </div>
                 </div>
            </div>

        </div>
        </div>
    )
}

export default Selecteditem;