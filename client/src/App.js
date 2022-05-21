import './App.css';
import PirateMain from './views/PirateMain';
import PirateCreate from './views/PirateCreate';
import PirateProfile from './views/PirateProfile';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PirateMain/>} />
          <Route path="/new" element={<PirateCreate/>} />
          <Route path="/pirates/:pirate_id" element={<PirateProfile/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
