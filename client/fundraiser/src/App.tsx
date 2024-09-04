
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
