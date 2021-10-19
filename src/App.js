import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import OrderProvider from './contexts/OrderProvider';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ContactScreen from './screens/ContactScreen';
import ErrorScreen from './screens/ErrorScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductsScreen from './screens/ProductsScreen';
import ServicesDetailScreen from './screens/ServicesDetailScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <Navbar />
          <Switch>
            <Route exact path="/"><HomeScreen /></Route>
            <Route exact path="/contact"><ContactScreen /></Route>
            <PublicRoute path="/signup"><SignUpScreen /></PublicRoute>
            <PublicRoute path="/signin"><SignInScreen /></PublicRoute>
            <PrivateRoute exact path="/services/:title"><ServicesDetailScreen /></PrivateRoute>
            <Route exact path="/products/"><ProductsScreen /></Route>
            <PrivateRoute exact path="/products/:title"><ProductDetailScreen /></PrivateRoute>
            <PrivateRoute exact path="/orders"><OrderScreen /></PrivateRoute>
            <Route path="*"><ErrorScreen /></Route>
          </Switch>
          <Footer />
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
