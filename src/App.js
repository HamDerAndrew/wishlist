import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    toggleModal: false,
    wishes: [
      {id: uuidv4(), item: 'T-shirt, str. L', url: ''},
      {id: uuidv4(), item: 'Playstation 4', url: ''},
      {id: uuidv4(), item: 'Skjorter str. L', url: ''},
      {id: uuidv4(), item: 'Ripped Jeans str. L',  url: ''}
   ]
  }

  // Delete wish
  deleteWish = (wishId) => {
    this.setState({
      wishes: [...this.state.wishes.filter(wish => wish.id !== wishId)]
    });
  }

  // Add wish
  addWish = (theWish, theUrl) => {
    const newWish = {
      item: theWish,
      url: theUrl,
      id: uuidv4()
    }
    
    this.setState({
      toggleModal: false,
      wishes: [
        ...this.state.wishes, newWish
      ]
    })
  }

 toggleMod = () => {
  this.setState(prevState => ({
    toggleModal: !this.state.toggleModal
  }));
 }


  render() {
    return(
      <div className="App">
      <Navbar />
      <header className="App-header">
        <h2 className="title is-3">Velkommen til din ønskeliste!</h2>
      </header>
      <List wishes={this.state.wishes} deleteWish={this.deleteWish}/>
      <Modal addWish={this.addWish} active={this.state.toggleModal ? 'is-active' : ''} closeModal={this.toggleMod} />
      <button onClick={this.toggleMod} className="button is-success">Tilføj ønske</button>
      <Footer />
    </div>
    );
  }

}

export default App;
