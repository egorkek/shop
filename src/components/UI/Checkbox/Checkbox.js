import React from 'react'
import classes from './Checkbox.css'
import {connect} from "react-redux";

const Checkbox = (props)=>{

return(
    <div className={classes.Checkbox} ></div>
)

}

function mapStateToProps(state) {
    return{
        state:state
    }

}

export default connect(mapStateToProps)(Checkbox)