import React from 'react'
import classes from './ShoppingCart.css'
import {connect} from 'react-redux'
class ShoppingCart extends React.Component{
    renderGoods = ()=>{
        const goods = this.props.state;
        return goods.map((obj, index)=>{
            return(
                <span key={index}>{obj.name}{index=== goods.length-1 ? null : ', '} </span>
            )
        })


    }



    render(){

        
    return(
        <div className={classes.ShoppingCart}>
        <h1>Ваши товары</h1>
        <p>Вы выбрали {this.props.state.length} товаров: {this.renderGoods()}</p>
        <h2>Преимущество покупок у нас</h2>
        <section>
            <div>
                <div><h3>1</h3></div>

                <p>Мы классные</p>
            </div>
            <div>
                <div><h3>2</h3></div>
                <p>Мы классные и очень-очень крутые</p>
            </div>
            <div>
                <div><h3>3</h3></div>

                <p>Даже сложно описать всю нашу крутость</p>
            </div>


        </section>
        <footer></footer>
    

        </div>
    )

    }

}

function mapStateToProps(state){
    return{
        state: state.cart

    }
}

export default connect(mapStateToProps)(ShoppingCart);