import React from 'react';
import { Route, Routes, Link} from 'react-router-dom'


function App() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <div className="bg-bodyColor w-screen h-screen flex justify-center items-center">
        <div id="container" className="bg-containerColor rounded-container w-container h-container"></div>
        </div>
      </>
    );
  }
  
  export default App;