import "./App.css";
import NavBar from "./components/navBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { Login } from "./views/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
