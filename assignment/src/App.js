import logo from './logo.svg';
import './App.css';
import { Customer } from './page/customer';
import { Allroutes } from './page/allroutes';
import {Link } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"space-between" , width:"70%",margin:"auto",paddingBottom:"20px"}}>
        <Link to="/" >HomePage</Link>
        <Link to="/customer" >Customer</Link>
        <Link to="/admin" >Admin</Link>
        <Link to="/login" >Login</Link>


      </div>
      <Allroutes/>

    </div>
  );
}

export default App;
