import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
