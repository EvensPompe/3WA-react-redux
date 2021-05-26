import './App.css';
import Header from "./Components/Header";
import NavBar from "./Components/layout/Navbar";
import Main from "./Components/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <NavBar />
      <Main/>
    </Router>
  );
}

export default App;
