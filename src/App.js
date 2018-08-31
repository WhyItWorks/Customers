import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import HomeContainer from './container/HomeContainer';
import CustomersContainer from './container/CustomersContainer';
import CustomerContainer from './container/CustomerContainer';

class App extends Component {

  // renderHome = () => (<h1>Home</h1>)
  renderCustomerListContainer = () => (<h1> C list container</h1>)
  renderCustomerNewContainer = () => (<h1> C new container</h1>)
  renderCustomerContainer = () => (<h1>C container</h1>)

  render() {
    return (

      <Router>
        <div className='App'>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            {/* Desde la más restrictiva a la más general */}
            <Route path="/customer/new" component={this.renderCustomerNewContainer} />
            <Route path="/customer/:dni" render={props => <CustomerContainer dni={props.match.params.dni} />} />
            {/* <Route path="/customer/:dni" render={props => <CustomerContainer {...props} dni={props.match.params.dni} />} /> */}
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App
