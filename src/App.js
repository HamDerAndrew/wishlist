import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    toggleModal: false,
    wishes: [
      {wish: 'T-shirt, str. L'},
      {wish: 'Playstation 4'},
      {wish: 'Skjorter str. L'}
   ]
  }

  deleteWish = (id) => {
    console.log("clicked " + id)
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
      <List wish={this.state.wishes} deleteWish={() => this.deleteWish()}/>
      <Modal active={this.state.toggleModal ? 'is-active' : ''} closeModal={this.toggleMod} />
      <button onClick={this.toggleMod} className="button is-success">Tilføj ønske</button>
      <Footer />
    </div>
    );
  }

}

export default App;
