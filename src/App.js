import './App.css';
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
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "gray"
      showAlert("Dark mode has been enable", "success")
      document.title = "TextUtils Dark Mode"
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enable", "success")
      document.title = "TextUtils Light Mode"

    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about" component={About}>
          {/* <About /> */}
        </Route>
        <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text here" mode={mode} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
