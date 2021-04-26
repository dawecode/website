import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer} from './components/common'


function App() {
  return (
   <div className="App">
     <Header />
      <Router>
        <Switch>
          <Route exact path='/'>
            cute
          </Route>
          <Route path='/about'>
            About
          </Route>
          <Route path='/projects'>
            Projects
          </Route>
          <Route path='/contact'>
            Contact
          </Route>
        </Switch>
      </Router>
     <Footer />
   </div>
    
  );
}

export default App;
