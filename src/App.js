
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  
const [mode, setmode] = useState("light");
const toggleMode=()=>{
  if(mode==="light")
  {setmode("dark");
     document.body.style.backgroundColor="#2A0944";
      showalert(" Dark Mode has been Enabled", "success");
 }
  else{  setmode("light");
    document.body.style.backgroundColor="white";
    showalert(" Light Mode has been Enabled", "success");
  }
}

const [alert, setalert] = useState(null)
const showalert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null)
  }, 1500);
}
return (<><Router>
 <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter Your Text Below" mode={mode} showalert={showalert} />
          </Route>
        </Switch>
</div>
</Router>
</>
 );
}

export default App;