import React from 'react'
import classes from './Layout.css'

const Layout = (props)=>{
    console.log(props.children)

return(
    <div className={classes.Layout}>
            {props.children}
        

        

    </div>

)

}
export default Layout