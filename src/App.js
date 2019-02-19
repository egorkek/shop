import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Goods from "./components/Goods/Goods";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Layout from './HOC/Layout/Layout'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        console.log(!!this.props.state.length);
        

    return (
        <Layout>
            {!this.props.state.length ?  (<Route path={'/'} component={Goods}/>) : 
            (
                <Switch>
                <Route path={'/goods/'} component={Goods}/>
                <Route path={'/shopping_cart/'} component={ShoppingCart}/>
            </Switch>
            ) }
        </Layout>

    );
  }
}


function mapStateToProps(state){
    return{
        state: state.cart
    }

}

export default withRouter(connect(mapStateToProps)(App));
