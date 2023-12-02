
import './App.css';
import { useState } from 'react';
import Tooltip from './components/Tooltip/Tooltip';


function App() {
  //state for position of the tooltip
  const [position, setPosition] = useState('top');

  //fucntion to change the position value using the ratio buttons
  function handleChange(event) {
    setPosition(event.target.value);
  }
    
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
