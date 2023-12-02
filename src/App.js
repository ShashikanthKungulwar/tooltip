import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Tooltip from './components/Tooltip/Tooltip';
function App() {

  const [position, setPosition] = useState('top');
  function handleChange(event) {
    setPosition(event.target.value);
  }
  // useEffect(()=>{
  //   console.log(position)    to verify onchange function
  // },[position])
  return (
    <div className="App">
      <Tooltip position={position}>
        hover on me
      </Tooltip>
      <div className="options">
        <input type='radio' name="position" value='top' onChange={handleChange} checked={position=='top'}/><label>TOP</label> <br />
        <input type='radio' name="position" value='bottom' onChange={handleChange} checked={position=='bottom'}/><label>BOTTOM</label> <br />
        <input type='radio' name="position" value='left' onChange={handleChange} checked={position=='left'}/><label>LEFT</label> <br />
        <input type='radio' name="position" value='right' onChange={handleChange} checked={position=='right'}/><label>RIGHT</label> <br />
      </div>
    </div>
  );
}

export default App;
