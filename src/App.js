import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() {
  return (<>
 <Navbar title="Text Utils"/>
 <div className="container my-3">
 <TextForm heading="Enter Your Text Below"/>
</div>
</>
 );
}

export default App;