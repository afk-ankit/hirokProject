import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Discourse from "./components/Discourses/Discourse";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/discourses" Component={Discourse} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
