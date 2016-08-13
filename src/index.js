import React from 'react'
import {render} from 'react-dom'
import Splash from './components/Splash'
import Home from './components/Home'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

// const App = React.createClass({
//   render(){
//     return(
//       // splash page ask for the name or new name
//       <div className="container">
//         <Splash />
//       </div>
//       )
//   }
// })

render(
  <div className="container">

  <Router history={browserHistory}>
    <Route path="/" component={Splash}></Route>
    <Route path="/home/:id" component={Home}></Route>
  </Router>

  </div>, document.getElementById('root')
)