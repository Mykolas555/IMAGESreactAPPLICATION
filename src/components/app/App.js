import Login from "../login/Login";
import Register from "../register/Register";
import Reset from "../reset/Reset";
import Header from "../header/Header";
import Home from "../home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddImage from "../addImage/AddImage";
import Gallery from "../gallery/Gallery";

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/addImage" element={<AddImage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;