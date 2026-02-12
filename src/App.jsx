import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Steps from './components/Steps';
import BookSeat from './components/BookSeat';
import SearchGallery from './components/SearchGallery';
import About from './components/About';
import Contact from './components/Contact'; // <--- Import this
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto relative">
        <Navbar />
        <Hero />
        <Steps />
        <BookSeat />
        <SearchGallery />
        <About />
        <Contact /> {/* <--- Add this here */}
        <Footer />
      </div>
    </div>
  );
}

export default App;