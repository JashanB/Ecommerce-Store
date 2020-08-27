import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const [state, setState] = useState({
    store: []
  });
  const divStyle = {
    padding: '177.7778% 5px 5px 5px',
    background: 'rgba(0,0,0,0.03)',
    // border-radius: '8px'
  }
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
      console.log(res.data)
      setState({
        store: [...state.store, res.data]
      });
    })
  }, [state])
  // const backgroundStyle = {
  //   backgroundImage = 
  // }
  return (
    // <Router>
    // <div>
    //   <h1 className="yoga-logo">Yoga-Me</h1>
    //   {/* <div className="App">
    //     <Switch>
    //       <Route path='/users/:user_id/places/:id' render={(props) => <Place {...props} />} />
    //       <Route path='/users/:id' render={(props) => <Search {...props} />} />
    //     </Switch>
    //   </div> */}

    // {/* </Router> */}
    // </div>
    <div className="App">
      <span>
        {/* {state} */}
      </span>
    {/* <img className="logo-img" src="yogalogo.png"></img>
    <img className="main-header-img" src="yogaheader.png"></img>
    <img className="yoga-background-img"src="yoga.png"></img> */}
    </div>
  );
}

export default App;
