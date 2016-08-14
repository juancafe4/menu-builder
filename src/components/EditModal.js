import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'

const EditModal = React.createClass({
  getInitialState(){
    return{
     name: '',
     type: '',
     id: '',
     price: '',
     picUrl: ''
    }
  },
  componentWillReceiveProps(nextProps) {
    this.setState({name: nextProps.menu.name, type: nextProps.menu.type, id: nextProps.menu.id, price: nextProps.menu.price, picUrl: nextProps.menu.picUrl})
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
  onEdit(){
    this.props.onSubmit(this.state);
  }, 
  onClose(){
    this.setState({name: '', price: '', type: '', picUrl: '', id: ''})
  },

  render() {
    if (this.state.name) {
      console.log('render menu ', this.state.menu)
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Edit {name}</Modal.Title>
        </Modal.Header>
         <form>
         <FormGroup>
        <Modal.Body>
          <input type="text" value={this.state.name} onChange={this.changeName}/>
          <input type="text" value={this.state.price} onChange={this.changePrice}/>
          <input type="text" value={this.state.type} onChange={this.changeType}/>
          <input type="text" value={this.state.picUrl} onChange={this.changePicUrl}/>
          <Image src={this.state.picUrl} rounded responsive />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.onEdit}>Save Changes</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
        </FormGroup>
        </form>
      </Modal>
    );
   } 
   else {
    return (<div></div>)
   }
  }
});


export default EditModal;