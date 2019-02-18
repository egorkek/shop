import React from 'react'
import classes from './Footer.css'
import {connect} from 'react-redux'


class Footer extends React.Component {

    render(){



        return(
            <div className={classes.Footer}>

            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        state: state.cart

    }
}

export default connect(mapStateToProps)(Footer)

