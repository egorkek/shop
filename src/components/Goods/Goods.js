import React from 'react'
import classes from './Goods.css'
import Product from "../../containers/Product/Product";
import { connect } from "react-redux";
import { addProductToCart } from "../../store/actions/addProductToCart";
import Footer from '../Footer/Footer'


class Goods extends React.Component {
    

    renderGoods = () => {
        const goods = this.props.state.goods
        return goods.map((good, index) => {
            return (
                <li key={index}>
                    <Product 
                    PriceSegment={good.PriceSegment} 
                    reviews={good.reviews} 
                    name={good.name} 
                    number={index + 1} 
                    rating={good.rating} 
                    trand={good.trand} 
                    onChange={() => { this.props.addProductToCart(index)}}
                    />
                </li>

            )

        })


    }
    render() {
        return (
            <div className={classes.Goods}>
                <h1>Список товаров</h1>

                <div className={classes.Tags}>
                    <p>#</p>
                    <p>Название</p>
                    <p>Рейтинг</p>
                    <p>Тренд</p>
                    <p>Ценовой сегмент</p>
                    <p>Отзывы покупателей</p>
                    <p>В корзину</p>
                </div>
                <ul>
                    {this.renderGoods()}

                </ul>
                <Footer/>




            </div>
        )

    }

}

function mapStateToProps(state) {
    return {
        state: state
    }

}

function mapDispatchToProps(dispatch) {
    return {
        addProductToCart: (key) => dispatch(addProductToCart(key))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Goods)