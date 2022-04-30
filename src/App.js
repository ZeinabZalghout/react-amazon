import './App.css';

import  React from 'react';
import Home from './Home'
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Detail from './components/Detail'
function App() {

 
 

  return (
 
       
    <div className="app">
      
    <Router>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail" element={<Detail/>}/>
  </Routes>
  </Router>

    </div>
  );


}
export default App;

