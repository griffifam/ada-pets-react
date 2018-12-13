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
      images: '',
    };
  }

  onNameChange = (event) => {
    console.log(`Name Field updated ${event.target.value}`);
    this.setState({
      name: event.target.value,
    });
  }

  onSpeciesChange = (event) => {
    console.log(`Species Field updated ${event.target.value}`);
    this.setState({
      species: event.target.value,
    });
  }

  onImageChange = (event) => {
    console.log(`Image Field updated ${event.target.value}`);
    this.setState({
      images: event.target.value,
    });
  }

  onFormSubmit = (event) => {
  event.preventDefault();

  const newPet = {
    name: this.state.name,
    species: this.state.species,
    images: this.state.images,
  };

  this.setState({
    name: '',
    species: '',
    images: '',
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
        <div>
          <label htmlFor="images">Image:</label>
          <input name="images"
            value={this.images}
            onChange={this.onImageChange}
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
  images: PropTypes.string.isRequired,
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
