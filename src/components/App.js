import React from 'react'
import Footer from './Footer'
import Header from './Header';
import Technologies from './Technologies'
import "../css-components/app.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Technologies/>
      <Footer />
    </div>
  );
}

export default App;
