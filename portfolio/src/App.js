import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, About, Projects, Contact } from './components/common';




function App() {
  return (
   <div className="App">
     <Header />
      
        <About/>
        {/* <Switch>
          <Route exact path='/'>
          home
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/projects'>
            <Projects/>
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch> */}
   
     <Footer />
   </div>
    
  );
}

export default App;
