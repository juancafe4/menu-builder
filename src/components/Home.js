import React from 'react'
import {Image, Table, Modal} from 'react-bootstrap'

//destructuring in the home
const MenuFetch = React.createClass({
  getInitialState(){
    return{
      restId: this.props.params.id,
      menu: [],
    }
  },
  componentWillMount(){
     let url = '/api/menu'
     fetch(url)
      .then(Response => {
      return Response.json();
      })
      .then(data => {

        let newMenu = data.filter(data => this.props.params.id === data.resId)
        this.setState({menu: newMenu})
      })
      .catch(err => {
        console.log(err)
      })
  },
  render() {
    if (this.state.menu.length){
      return (<Home menu={this.state.menu}/>)
    }
    else
      return <h1>Loading...</h1>
  }
})

const Home = React.createClass({
  getInitialState(){
    return {
      menu: this.props.menu
    }
  },
  editMenu(){
    <modalInstance />
  },
  render(){
    let menuItems = this.props.menu.map(item =>
      ( 
        <tr key={item.id}>
          <td className="col-xs-2">{item.name}</td>
          <td className="col-xs-2">{item.type}</td>
          <td className="col-xs-1">{item.price}</td>
          <td className="col-xs-2"><Image src={item.picUrl} rounded responsive /></td>
          <td className="col-xs-1"><button onClick={this.editMenu} className="btn btn-info fa fa-pencil-square-o"></button></td>
          <td className="col-xs-1"><button onClick={this.deleteMenu} className="btn btn-danger fa fa-trash"></button></td>
          
        </tr>
      )
    )
    return (
      <Table className="container" hover={true}>
      <thead>
        <tr>
          <th className="col-xs-2">Name</th>
          <th className="col-xs-2">Type</th>
          <th className="col-xs-1">Price $</th>
          <th className="col-xs-2">Picture</th>
          <th className="col-xs-1">Edit</th>
          <th className="col-xs-1">Delete</th>
        </tr>
      </thead>
        <tbody>
          {menuItems}
        </tbody>
        
      </Table>  
    )
  }
})

const modalInstance = (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);


export default MenuFetch;