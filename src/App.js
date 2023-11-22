  
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState}  from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showsetAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
    const toggleMode = () => {
      if(mode === "light"){
        setMode("dark");
        document.body.style.background= "#003566";
        showsetAlert("Dark mode has been enabled", "sucess");
        // document.title = "Textutils - Dark Mode";
        // setInterval(() => {
        //   document.title = "Textutils is Amazing";
        // }, 2000);
        // setInterval(() => {
        //   document.title = "Install Textutils Now";
        // }, 1500);
      }
      else{
        setMode("light");
        document.body.style.background= "white";
        showsetAlert("Light mode has been enabled", "sucess");
        // document.title = "Textutils - Light Mode";
  
      }
    }
    // const changegreen = ()=>{
    //   document.body.style.backgroundColor = '#35C649';
      
    // }
    // const changeyellow = ()=>{
    //   document.body.style.backgroundColor = '#CAB911'
    // }
    // const changered = ()=>{
    //   document.body.style.backgroundColor = '#C15031'
    // }
    return (
      <> 
    <Router>
      <NavBar title="TextUtiles " mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Switch>
            <Route exact path="/about"> 
                { <About mode={mode} /> }
             </Route>
            <Route exact path="/">
                <TextForm heading=" Try Textutils - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showsetAlert} mode={mode}/> 
            </Route>
              
            </Switch>
      </div>
    </Router>
  
  
      </>
    );
}
export default App;
