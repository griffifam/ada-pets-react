import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      species: '',
    };
  }

  onNameChange = (event) => {
    console.log(`Name Field updated ${event.target.value}`);
    this.setState({
      name: event.target.value,
    });
  }

  onSpeciesChange = (event) => {
    console.log(`Name Field updated ${event.target.value}`);
    this.setState({
      species: event.target.value,
    });
  }

  onFormSubmit = (event) => {
  event.preventDefault();

  const newPet = {
    name: this.state.name,
    species: this.state.species,
  };

  this.setState({
    name: '',
    species: '',
  });

  this.props.addPetCallback(newPet)

}

  render() {
    return (
      <form  className="new-pet-form" >
        <h3>Add a Pet</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name"
            value={this.name}
            onChange={this.onNameChange} />
        </div>
        <div>
          <label htmlFor="species">Species:</label>
          <input name="species"
            value={this.species}
            onChange={this.onSpeciesChange}
            />
        </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" onClick={this.onFormSubmit}/>
      </form>
    );
  }


}

NewPetForm.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
