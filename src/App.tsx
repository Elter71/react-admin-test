import React from 'react';
import {Admin, Resource, ShowGuesser} from 'react-admin';
import dataProvider from './utils/dataProvider';
import {CharacterList} from "./list/CharacterList";
import {EpisodeList} from "./list/EpisodeList";
import {LocationList} from "./list/LocationList";


const dataProviderInstance = dataProvider('https://rickandmortyapi.com/api')
function App() {
  return (
    <Admin dataProvider={dataProviderInstance}>
      <Resource name="character" list={CharacterList} show={ShowGuesser}/>
        <Resource name="episode" list={EpisodeList} show={ShowGuesser}/>
        <Resource name="location" list={LocationList} show={ShowGuesser}/>
    </Admin>
  );
}

export default App;
