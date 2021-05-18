import React from 'react'
import "../css-components/app.css"
import Footer from './Footer'
import Header from './Header';
import Technologies from './Technologies'
import Projects from './Projects'


function App() {
  return (
    <div className="App">
      <Header />
      <Technologies/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
