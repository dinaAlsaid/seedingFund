import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./views/Login";
import { LandingPage } from "./views/LandingPage";
import { FundingReq } from "./views/FundingReq";
import { UserProjects } from "./views/UserProjects";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Projects" element={<UserProjects />} />
            <Route path="/FundingRequest" element={<FundingReq />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
