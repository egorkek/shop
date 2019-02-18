import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Goods from "./components/Goods/Goods";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Layout from './HOC/Layout/Layout'

class App extends Component {
    render() {

    return (
        <Layout>
            <Switch>
                <Route path={'/goods/'} component={Goods}/>
                <Route path={'/shopping_cart/'} component={ShoppingCart}/>
            </Switch>

        </Layout>

    );
  }
}


export default App;
