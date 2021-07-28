import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, affiliation, allies, enemies, photoUrl }) => (
  <figure>
    <img src={photoUrl} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{affiliation}</p>
      <p>{allies}</p>
      <p>{enemies}</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  allies: PropTypes.array,
  enemies: PropTypes.array,
  photoUrl: PropTypes.string.isRequired
};

export default Character;