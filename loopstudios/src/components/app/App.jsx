import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import GlobalStyles from "./StyleApp";
import Main from '../main/Main';

const App = () => {
  return (
   <>
   <GlobalStyles/>
   <Header/>
   <Main/>
   <Footer/>
   </>
  )
}

export default App
