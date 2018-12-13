import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';



  // const pets = props.pets;

const petElements = (props) => {
  return props.pets.map((pet, i) => {
    // console.log(pet);
    return (
      <PetCard
        key={pet.id}
        id={pet.id}
        name={pet.name}
        species={pet.species}
        about={pet.about}
        location={pet.location}
        selectDetailsCallback={props.selectDetailsCallback}
        removePetCallback={props.removePetCallback}
        />
    )
  });
}

const PetList = (props) => {

  return (
    <div className="card-group">
      {petElements(props)}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
  removePet: PropTypes.func,

};

export default PetList;
