import React from 'react';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { SideNav } from './components/SideNav/SideNav';
import { Home } from './pages/Home/Home';


import EmailProvider from "./contexts/EmailContext";

function App() {
  return (
    <EmailProvider>
      <div className="app">
        <NavBar />
        <main className="app__main">
          <SideNav />
          <Home />
        </main>
      </div>
    </EmailProvider>
  );
}

export default App;
