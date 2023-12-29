import './App.css';
import './index.css'




import Navbar from './Components/Navbar';
import Home from './Components/Home';

import Profile from './Components/Profile';

function App() {
  return (
      <div className="App">
        <Navbar></Navbar>
        <Home></Home>
        <Profile></Profile>
      </div>
  );
}

export default App;
