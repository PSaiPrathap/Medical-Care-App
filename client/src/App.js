import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import DoctorsProfile from "./components/DoctorsProfile"
import BookedAppointment from "./components/BookedAppointment"

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/doctorsProfile/:id" component={DoctorsProfile} />
          <Route path="/BookedAppointment" component={BookedAppointment} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
