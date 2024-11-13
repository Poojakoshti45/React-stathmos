import Header from './Header';
import Footer from './Footer';
import LandingPage from './Landingpage';
import './App.css'
import React, { useEffect } from 'react';


function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  )
}

export default App
