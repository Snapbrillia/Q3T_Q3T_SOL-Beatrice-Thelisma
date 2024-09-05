
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/pages/SignUp';
import CreateCampaign from './components/pages/CreateCampaign';


function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
