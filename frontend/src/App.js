import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'



const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        <Route path='/placeorder' component={PlaceOrderScreen} exact />
          <Route path='/payment' component={PaymentScreen} exact /> 
          <Route path='/shipping' component={ShippingScreen} exact />
          <Route path='/profile' component={ProfileScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/cart/:id?' component={CartScreen} exact />
          <Route path='/products/:id' component={ProductScreen} exact />
          <Route path='/' component={Homescreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
