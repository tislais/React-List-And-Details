import React, { Component } from 'react';
import { fetchCharacterById } from '../services/TlabApi';

export default class CharacterDetail extends Component {
  state = {
    character: []
  };

  async componentDidMount() {
    const requestedCharacter = this.props;
    
    try {
      const character = await fetchCharacterById(requestedCharacter.match.params.id);
      this.setState({ character: character });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { character } = this.state;

    return (
      <h1>details of {character.name}</h1>
    )
  }
}