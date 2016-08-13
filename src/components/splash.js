import React from 'react'
import {Jumbotron , Button, FormGroup, FormControl} from 'react-bootstrap'

const NewForm = React.createClass({
  getInitialState() {
    return {
      name: '',
      location: '',
      cuisine: ''
    };
  },
  newName(e) {
    this.setState({name: e.target.value});
  },
  newLocation(e) {
    this.setState({location: e.target.value});
  },
  newCuisine(e) {
    this.setState({cuisine: e.target.value});
  },
  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText" >
          <FormControl type="text" value={this.state.name} placeholder="Enter Name" onChange={this.newName} />
          <FormControl type="text" value={this.state.location} placeholder="Enter Location" onChange={this.newLocation} />
          <FormControl type="text" value={this.state.cuisine} placeholder="Cuisine Type" onChange={this.newCuisine} />
        </FormGroup>
        <Button bsStyle="primary">New Restaurant</Button>
      </form>
    );
  }
});


const Splash = React.createClass({
  getInitialState(){
    return{
      name: ''
    }
  },
  resName(e){
    this.setState({name: e.target.value})
  },
  render(){
    return(
    <Jumbotron>
      <h1>Menu Builder</h1>
      <p>Join the future, build dynamic menus for your restaurant today!</p>
      <div className="row">
        <div className="col-md-6">
        <h3>Enter Restaurant Name</h3>
          <FormGroup>
          <FormControl type="text" value={this.state.name} placeholder="Enter Name" onChange={this.resName}/>
          </FormGroup>
          <Button bsStyle="primary">Go to Menu</Button>
        </div>
        <div className="col-md-6">
        <h3>Enter a New Restaurant</h3>
          <NewForm />
      </div>
      </div>
    </Jumbotron>
    )
  }
})


export default Splash