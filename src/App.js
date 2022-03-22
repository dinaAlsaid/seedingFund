import "./App.css";
import NavBar from "./components/navBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />

        </Routes>
      </Router>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
