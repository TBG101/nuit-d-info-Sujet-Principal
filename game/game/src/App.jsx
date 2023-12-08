import { useState } from 'react';
import SkyElement from './gameElements/skyElement/SkyElement';
import Terrain from './gameElements/terrain/terrain';
import Dragandball from './gameElements/mario/PersonnageGlissant'
import MonComposantAudio from './gameElements/audio/composantaudio';


function App() {

  return (
    <>  
    <MonComposantAudio/>
    <Dragandball />
      <SkyElement />
      <Terrain />

    

    </>
  );
}

export default App;
