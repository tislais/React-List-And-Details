import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  
  const characterElements = characters.map((character) => (
    <li key={character._id}>
      <Character
        name={character.name}
        allies={character.allies}
        enemies={character.enemies}
        photoUrl={character.photoUrl}
        id={character._id}
      />
    </li>
  ))
  return (
    <ul>
      {characterElements}
    </ul>
  )
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    allies: PropTypes.array,
    enemies: PropTypes.array,
    photoUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;