import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Notifications from './components/Notifications/Notifications'; // Assuming Notifications is a component you have

function App() {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
