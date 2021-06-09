// REACT-ROUTER COMPONENTS
import { Switch, Route } from 'react-router-dom'

// COMPONENTS
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage';

// STYLING
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route 
          exact
          path = "/"
          render = {() => <Homepage />}
        >  
        </Route>
      </Switch>
    </div>
  );
}

export default App;
