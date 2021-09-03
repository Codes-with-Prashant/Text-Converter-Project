import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'


function App() {
  
const [mode, setmode] = useState("light");
const toggleMode=()=>{
  if(mode==="light")
  {setmode("dark");
document.body.style.backgroundColor="#2A0944";}
  else{  setmode("light");
    document.body.style.backgroundColor="white";
  }
}
  return (<>
 <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
 <div className="container my-3">
 <TextForm heading="Enter Your Text Below" mode={mode} />
{/*} <About/>*/}
</div>
</>
 );
}

export default App;