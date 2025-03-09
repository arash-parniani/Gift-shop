import { Route, Routes } from "react-router";


//page
import Home from './pages/Main/Home'
import Login from './pages/login/Login'
import Signup from "./pages/signup/Signup";
import Dashboard from './pages/dashboard/Dashboard'
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import GiftCart from './pages/giftcart/GiftCart'



const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/giftcart" element={<GiftCart />} />
    </Routes>
   );
}
 
export default App;