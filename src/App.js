import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from './container/HomeContainer';
import './App.css'
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
          <Route exact path="/customers" component={CustomerContainer} />
          <Switch>
            {/* Desde la más restrictiva a la más general */}
            <Route path="/customers/new" component={this.renderCustomerNewContainer} />
            <Route path="/customers/:dni" component={this.renderCustomerContainer} />
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App
