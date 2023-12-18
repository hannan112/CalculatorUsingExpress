import React, { useState } from 'react';
import './calculator.css'
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="container">
      <div className='text-container'><h2>Lets do some math</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias veniam expedita sequi culpa cumque nesciunt rerum sapiente sunt dolorum magni. Illo minima enim sapiente nobis expedita fuga? Eligendi, eius velit.</p></div>

      <div className='calculator'>
        <div>
          <div>
            <p>output {result}</p>
          </div>
          <div className='cal'>
            <input type="text" value={input} readOnly />
          </div>
          <div className='CalButton'>
            <button onClick={() => handleButtonClick('1')}>1</button>
            <button onClick={() => handleButtonClick('2')}>2</button>
            <button onClick={() => handleButtonClick('3')}>3</button>
            <button onClick={() => handleButtonClick('+')}>+</button>
          </div>
          <div className='CalButton' >
            <button onClick={() => handleButtonClick('4')}>4</button>
            <button onClick={() => handleButtonClick('5')}>5</button>
            <button onClick={() => handleButtonClick('6')}>6</button>
            <button onClick={() => handleButtonClick('-')}>-</button>
          </div>
          <div className='CalButton'>
            <button onClick={() => handleButtonClick('7')}>7</button>
            <button onClick={() => handleButtonClick('8')}>8</button>
            <button onClick={() => handleButtonClick('9')}>9</button>
            <button onClick={() => handleButtonClick('*')}>*</button>
          </div>
          <div className='CalButton'>
            <button onClick={() => handleButtonClick('0')}>0</button>
            <button onClick={handleClear}>C</button>
            <button onClick={handleCalculate}>=</button>
            <button onClick={() => handleButtonClick('/')}>/</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Calculator;
