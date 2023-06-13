import DonationPage from "./pages/DonationPage";
import Home from "./pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className=" bg-[#f9ebb2]">
      <Router>
        <Routes>
          <Route path="/" index element={<Home/>}></Route>
          <Route path="/donation" element={<DonationPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
