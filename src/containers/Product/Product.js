import React from 'react'
import classes from './Product.css'
const Product = (props) => {

    return (
        <div className={classes.Product}>
            <p>{props.number}</p>
            <p>{props.name}</p>
            <p>{props.rating}</p>
            <p style={{ color: 'green' }}>{props.trand}</p>
            <div>{ '\u20BD'.repeat(props.PriceSegment)}</div>
            <p>{props.reviews}</p>
            <input id={props.number} type='checkbox' onChange={(e) => props.onChange(e)}/>
            <label htmlFor={props.number}></label>

        </div>

    )

}
export default Product