import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart.JSX";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
};

export default App;