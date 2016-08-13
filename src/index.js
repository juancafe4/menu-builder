import React from 'react'
import {render} from 'react-dom'
import Splash from './components/splash'

const App = React.createClass({
  render(){
    return(
      // splash page ask for the name or new name
      <div className="container">
        <Splash />
      </div>
      )
  }
})

render(
  <App />, document.getElementById('root')
  )