import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, allies, enemies, photoUrl, id }) => (
  <Link to={`/character/${id}`}>
    <figure>
      <img src={photoUrl} alt={name} />
      <figcaption>
        <p>{name}</p>
        <p>{allies}</p>
        <p>{enemies}</p>
      </figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  allies: PropTypes.array,
  enemies: PropTypes.array,
  photoUrl: PropTypes.string.isRequired
};

export default Character;