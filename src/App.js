import React, { useState } from 'react';
import './App.css';


// Components
// import CompOne from './components/CompOne';

const App = () => {
  // const [count, setCount] = useState(0);
  // const [isCheck, setCheck] = useState('Mohsin');

  // const greetingFunc = (e) => {
  //   console.log('Hello ' + e);
  // }

  // let handleChange = () => {
  //   setCheck('Mohsin Ali Khan');
  // }

  const [isDark, setDark] = useState(false);

  return (
    <>
      {/* <p>count: {count}</p>
      <CompOne name="Mohsin Ali Khan" age={20} setCount={setCount} greeting={greetingFunc} />

      <p>Name: {isCheck}</p>
      <button onClick={handleChange}>Change Name</button> */}

      <div className={isDark ? 'dark-mode' : 'light-mode'}>
        <div className="container">
          <span style={{ color: isDark ? 'yellow' : 'grey', fontSize: '50px' }}>*</span>

          <label className='switch'>
            <div className="switch-checkbox">
              <input type="checkbox"
                onChange={() => setDark(!isDark)}
              />

              <span className='slider round'></span>
            </div>
          </label>


          <span style={{ color: isDark ? '#c96dfd' : 'grey', fontSize: '35px' }}>☽</span>
        </div>
        <div>
          <h2 className='center'>It's {isDark ? 'Dark' : 'Light'} Mode</h2>
        </div>
      </div>




    </>
  )
}

export default App;