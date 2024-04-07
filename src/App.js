import './App.css';
import Navbar from './components/Navbar';
import ReviewPage from './components/ReviewPage';
import Test from './components/test';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ReviewPage />} />
        
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
