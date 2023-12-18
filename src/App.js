// App.js

import React, { useState } from 'react';
import Navbar from './component/Navbar';
import HomePage from './component/Homepage';
import Calculator from './component/Calculator';
import Quote from './component/Qoute';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <HomePage />;
      case 'calculator':
        return <Calculator />;
      case 'quote':
        return <Quote />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar onButtonClick={handleButtonClick} />
      {renderActiveComponent()}
    </div>
  );
};

export default App;
