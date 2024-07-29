import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Notifications from './Notifications';
import App from './App.css';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
