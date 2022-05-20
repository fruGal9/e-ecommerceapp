import logo from './logo.svg';
import './App.css';
import { auth } from "./firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Filter from "./components/Filter/Filter";
import FilterBar from './components/FilterBar/FilterBar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import ProductCard from './components/ProductCard/ProductCard';
import ProductCarousel from './components/ProductCarousel/ProductCarousel';
import ProductPicturesC from './components/ProductPicturesC/ProductPicturesC';
import RatingFeeling from './components/RatingFeeling/RatingFeeling';
import Review from './components/Review/Review';
import SearchBar from './components/SearchBar/SearchBar';
import Social from './components/Social/Social';


function App() {
  return (
    <Router>
      <div className="App">
      <ul>
      <li>
        <Link to='/Filter'>Filter</Link>
      </li>
      <li>
        <Link to='/FilterBar'>FilterBar</Link>
      </li>
      <li>
        <Link to='/Footer'>Footer</Link>
      </li>
      <li>
        <Link to='/Header'>Header</Link>
      </li>
      <li>
        <Link to='/Menu'>Menu</Link>
      </li>
      <li>
        <Link to='/ProductCard'>ProductCard</Link>
      </li>
      <li>
        <Link to='/ProductCarousel'>ProductCarousel</Link>
      </li>
      <li>
        <Link to='/ProductPicturesC'>ProductPicturesC</Link>
      </li>
      <li>
        <Link to='/RatingFeeling'>RatingFeeling</Link>
      </li>
      <li>
        <Link to='/Review'>Review</Link>
      </li>
      <li>
        <Link to='/SearchBar'>SearchBar</Link>
      </li>
      <li>
        <Link to='/Social'>Social</Link>
      </li>
      
        

     </ul>
     </div>
    <Routes>
      <Route exact path='/Filter' element={< Filter />}></Route>
      <Route exact path='/FilterBar' element={< FilterBar />}></Route>
      <Route exact path='/Footer' element={< Footer />}></Route>
      <Route exact path='/Header' element={< Header />}></Route>
      <Route exact path='/Menu' element={< Menu />}></Route>
      <Route exact path='/ProductCard' element={< ProductCard />}></Route>
      <Route exact path='/ProductCarousel' element={< ProductCarousel />}></Route>
      <Route exact path='/ProductPicturesC' element={< ProductPicturesC />}></Route>
      <Route exact path='/RatingFeeling' element={< RatingFeeling />}></Route>
      <Route exact path='/Review' element={< Review />}></Route>
      <Route exact path='/SearchBar' element={< SearchBar />}></Route>
      <Route exact path='/Social' element={< Social />}></Route>
      </Routes>
    
    </Router>



  );
}

export default App;
