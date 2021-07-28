import React, { Component } from 'react';
import CharacterList from '../components/CharacterList';
import { fetchCharacters } from '../services/TlabApi';

export default class TlabCharacters extends Component {
  state = {
    characters: [],
    loading: true
  }

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({ 
      characters, 
      loading: false 
    })
  }

  render() {
    const { characters, loading } = this.state;

    if (loading) return <h1>Loading...</h1>

    return < CharacterList characters={characters} />;
  }
}