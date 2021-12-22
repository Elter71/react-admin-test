import React from 'react';
import {Admin, Resource } from 'react-admin';
import dataProvider from './utils/dataProvider';
import {CharacterList} from "./list/CharacterList";


const dataProviderInstance = dataProvider('https://rickandmortyapi.com/api')
function App() {
  return (
    <Admin dataProvider={dataProviderInstance}>
      <Resource name="character" list={CharacterList}/>
    </Admin>
  );
}

export default App;
