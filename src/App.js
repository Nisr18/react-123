import React from 'react';
import './style.css';
import Namelist from './components/NameList';
import Uc from './components/uc';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* <Fgh /> */}
      <NameList />
      <Uc />
    </div>
  );
}
