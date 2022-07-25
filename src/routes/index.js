import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Register from '../pages/register';
import Contact from '../pages/contact';
import App from '../App';


export default function AppRoutes() {
    return (
        <BrowserRouter>
        <div className="grid">
            <div className="col"><Link to="/">Home</Link></div>
            <div className="col"><Link to="/register">Register</Link></div>
            <div className="col"><Link to="/contact">Contact</Link></div>
        </div>
        <Routes>
          <Route exact path="register" element={<Register />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="/" element={<App />} />
        </Routes>
       </BrowserRouter>
    );
}