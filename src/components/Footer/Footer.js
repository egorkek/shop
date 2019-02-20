import React from 'react'
import classes from './Footer.css'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Footer extends React.Component {

    renderFooter = () => {
        if (!this.props.count) {
            return (
                <div className={classes.FooterNull}>
                    <p>Пожалуйста, отметьте галочками несколько товаров</p>

                </div>
            )
        } else {
            return (
                <div className={classes.Footer}>
                    <span>Вы выбрали </span> 
                    <div>{this.props.count}</div>
                    <span>товара </span> 
                    <NavLink to='/shopping_cart'><button>Перейти в корзину</button></NavLink>

                </div>
            )


        }


    }

    render() {




        return (
            <React.Fragment>
                {this.renderFooter()}
            </React.Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        state: state.cart

    }
}

export default connect(mapStateToProps)(Footer)

