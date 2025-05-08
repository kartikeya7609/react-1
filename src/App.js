import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import React from 'react';
import Carousel from './components/carousel';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar title="TextUtils" About="About" Home="Home" />
      <div   >
        <Routes>
          <Route path="/about" element={<>
            <About />
            <Carousel />
                <Footer /></>
            } />
          <Route
            path="/"
            element={
              <>
                <TextForm />
                <Carousel />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
