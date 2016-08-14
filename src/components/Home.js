import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'

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
      menu: this.props.menu,
      smShow: false,
      editMenu: this.props.menu[0]
    }
  },
  showModal(item){
    this.setState({editMenu: item, smShow: true })
  },
  close() {
    this.setState({smShow: false})
  },
  render(){

    let smClose = () => this.setState({ smShow: false });
    let menuItems = this.props.menu.map(item =>
      ( 
        <tr key={item.id}>
          <td className="col-xs-2">{item.name}</td>
          <td className="col-xs-2">{item.type}</td>
          <td className="col-xs-1">{item.price}</td>
          <td className="col-xs-2"><Image src={item.picUrl} rounded responsive /></td>
          <td className="col-xs-1"><button onClick={this.showModal.bind(null, item)} className="btn btn-info fa fa-pencil-square-o"></button></td>
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
      <MySmallModal show={this.state.smShow} onHide={this.close} menu={this.state.editMenu}/>
      </Table>  
    )
  }
})

const MySmallModal = React.createClass({
  getInitialState(){
    return{
     name: "",
     price: "",
     type: "",
     picUrl: "",
     id: ""
    }
  },
  componentWillMount() {
    let {id, name, picUrl, price, type} = this.props.menu;
    this.setState({name: name, price: price, type: type, picUrl: picUrl, id: id})
  },
  changeName(e){
    this.setState({name: e.target.value})
  },
  changePrice(e){
    this.setState({price: e.target.value})
  },
  changeType(e){
    this.setState({type: e.target.value})
  },
  changePicUrl(e){
    this.setState({picUrl: e.target.value})
  },
  render() {
    let {id, name, picUrl, price, type} = this.props.menu;
    
   
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Edit {name}</Modal.Title>
        </Modal.Header>
         <form>
         <FormGroup>
        <Modal.Body>
          <FormControl type="text" value={this.state.name} onChange={this.changeName}/>
          <FormControl type="text" value={this.state.price} onChange={this.changePrice}/>
          <FormControl type="text" value={this.state.type} onChange={this.changeType}/>
          <FormControl type="text" value={this.state.picUrl} onChange={this.changePicUrl}/>
          <Image src={this.state.picUrl} rounded responsive />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Save Changes</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
        </FormGroup>
        </form>
      </Modal>
    );
  }
});


export default MenuFetch;