
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tracker from './pages/tracker';
import XAndO from './pages/XandO';
import Snake from './pages/Snake';
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
    
     <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path='/Tracker' element={<Tracker />} />
      <Route path='/XAndO' element={<XAndO />} />
      <Route path='/Snake' element={<Snake />} />
     </Switch>
     
     </Router>
    </div>
  );
}

export default App;
