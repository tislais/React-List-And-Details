import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, allies, enemies, photoUrl, id }) => (

  <Link to={`/character/${id}`}>

    <figure className="">

      <img src={photoUrl} alt={name}
        className="
          h-[300px] sm:h-[200px] 
          w-full 
          object-cover
        " />

      <figcaption>

        <p className="uppercase text-lg font-bold tracking-wider">
          {name}
        </p>
        
        <p>Allies: {allies.map((ally) => (
          <span key={id}>{ally}</span>
        ))}
        </p>
        
        <p>Enemies: {enemies.map((enemy) => (
          <span>{enemy}</span>
        ))}
        </p>
        
      </figcaption>
    </figure>

  </Link>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  allies: PropTypes.array,
  enemies: PropTypes.array,
  photoUrl: PropTypes.string.isRequired
};

export default Character;