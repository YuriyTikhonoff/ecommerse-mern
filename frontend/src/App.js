
import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'


const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3"> 
        <Container>
          <Route path='/' component={Homescreen} exact />
          <Route path='/products/:id' component={ProductScreen} exact />
          <Route path='/cart/:id?' component={CartScreen} exact />

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
