
import './App.css';
import Movie from './components/Movie'
import NavBar from './components/NavBar'
import {Route,Routes} from 'react-router-dom'
import Details from './components/Details'
import CustomModal from './components/Modals'
import { useState } from 'react';
function App() {
  const [getMovies,setGetMovies] = useState({})
  return (
    <div className="App">
     <NavBar />
      <Routes>
        <Route index  element={<Movie getMovies={getMovies} />}/>
        <Route path='/Details/:id' element={<Details />}/>
      </Routes>
    <CustomModal setGetMovies={setGetMovies}/>
    </div>
  );
}

export default App;
