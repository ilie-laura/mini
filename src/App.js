
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tracker from './pages/tracker';
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
    
     <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path='/Tracker' element={<Tracker />} />
     </Switch>
     
     </Router>
    </div>
  );
}

export default App;
