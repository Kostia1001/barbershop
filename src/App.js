import './App.css';
import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(() => {
    document.body.classList.add('dark-scrollbar');

    // Убираем класс при размонтировании компонента
    return () => {
      document.body.classList.remove('dark-scrollbar');
    };
  }, []);
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
