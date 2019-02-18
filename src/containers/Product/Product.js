import React from 'react'
import classes from './Product.css'
const Product = (props)=>{

return(
    <div className={classes.Product}>
        <p>{props.number}</p>
        <p>{props.name}</p>
        <p>{props.rating}</p>
        <p>{props.trand}</p>
        <p>{props.PriceSegment}</p>
        <p>{props.reviews}</p>
        <input type='checkbox' onChange={()=>props.onChange()}></input>

    </div>

)

}
export default Product