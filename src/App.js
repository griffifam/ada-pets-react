import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  selectDetails = (id) => {
    const selectedPet = this.state.petList.find((pet) => pet.id === id);
    this.setState({
      currentPet: selectedPet
    });
  }

  removePet = (id) => {
    const filteredList = this.state.petList.filter(function(item) {
      return item.id !== id
    });
    console.log("delete this");
    console.log(filteredList);
    this.setState({
      currentPet: undefined,
      petList: filteredList
    });
  }

  addPet = (pet) => {
    let updatedPetList = this.state.petList;
    updatedPetList.push(pet);
    console.log(updatedPetList);
    this.setState({
      petList: updatedPetList
    });
  }

  render() {
    const { currentPet } = this.state;


    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
        { this.state.currentPet ? <PetDetails currentPet={currentPet}/> : "" }

        <section className="pet-list-wrapper">
          <PetList pets={this.state.petList} selectDetailsCallback={this.selectDetails} removePetCallback={this.removePet} />
        </section>
        <section className="new-pet-form-wrapper">
          <NewPetForm addPetCallback={this.addPet.bind(this)}/>
        </section>
      </main>
    );
  }
}

export default App;
