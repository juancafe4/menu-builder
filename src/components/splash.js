import React from 'react'
import {Jumbotron , Button, FormGroup, FormControl} from 'react-bootstrap'
import {Link} from 'react-router'
import {browserHistory} from 'react-router'
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
  newRestaurantInfo() {
    //make an object with the information from the user input
    //send it back to the parent

    let {name, location, cuisine} = this.state

    if (name && location && cuisine) {
      // let data = new FormData();
      let newRest = {name, location, cuisine};
      // data.append('json', JSON.stringify(newRest))

      fetch("/api/restaurant/",
          {
          method: "POST",
          headers: {  
            "Content-type": "application/json"  
          },  
          body: JSON.stringify({name: name, location: location, cuisine: cuisine})
          })
          .then(() => console.log('done') )
          .catch((err)=>{ console.log('err:', err)})

    }
    // let newRstObj;

    // this.props.makeNew(newRstObj)
  },
  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText" >
          <FormControl type="text" value={this.state.name} placeholder="Enter Name" onChange={this.newName} />
          <FormControl type="text" value={this.state.location} placeholder="Enter Location" onChange={this.newLocation} />
          <FormControl type="text" value={this.state.cuisine} placeholder="Cuisine Type" onChange={this.newCuisine} />
        </FormGroup>
        <Link to="/home">
          <Button bsStyle="primary" onClick={this.newRestaurantInfo}>New Restaurant</Button>
        </Link>
      </form>
    );
  }
});


const Splash = React.createClass({
  getInitialState(){
    return{
      name: '',
      menu: [],
      restaurantId: ""
    }
  },
  resName(e){
    this.setState({name: e.target.value})
  },
  newRestaurant(newRestObj){
    //send a new restaurant to the backend
    //make an fetch request to /api/restaurant
  },
  restaurantValidation(e){
    //validate a restaurant from the backend and then pull up their menu items
    
    //Fetching Getting the api restaurant

    let url = "/api/restaurant"
    let newRestaurant
    fetch(url)
      .then(Response => {
        return Response.json()
      })
      .then(data => {
        let newRestaurant = data.filter(val => val.name === this.state.name)
        
        if (newRestaurant.length !== 0) {
        this.setState({restaurantId: newRestaurant[0].id});
        browserHistory.push(`/home/${this.state.restaurantId}`)
        }
        else {
         alert('Restaurant not found')
         return new Promise((resolve, reject) => {
         reject('Restaurant not found');
         });
        }
      })
      .catch(err => {
        console.log('err ', err)
      });
  },
  render(){
    return(
    <Jumbotron>
      <h1>Menu Builder</h1>
      <p>Join the future, build dynamic menus for your restaurant today!</p>
      <div className="row">
        <div className="col-xs-4">
        <h3>Enter Restaurant Name</h3>
          <FormGroup>
          <FormControl type="text" value={this.state.name} placeholder="Enter Name" onChange={this.resName}/>
          </FormGroup>
          
          <Button bsStyle="primary" onClick={this.restaurantValidation}>Go to Menu</Button>
          
            
        </div>

        <div className="col-xs-1">
          <h3>or</h3>
        </div>
        <div className="col-xs-6">
        <h3>Enter a New Restaurant</h3>
          <NewForm makeNew={this.newRestaurant}/>
      </div>
      </div>
    </Jumbotron>
    )
  }
})


export default Splash