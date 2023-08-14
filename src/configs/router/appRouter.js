import
{ 
    BrowserRouter as Router,
    Routes,
    Route
 } from "react-router-dom";

import Contacts from '../components/contacts';
import Login from "../components/login&signup";

export default function AppRouter(){
return(
    <Router>

        <Routes>

            <Route path="/login" element={<Login/>} />
            <Route path="/*" element={<Contacts/>} />

        </Routes>

    </Router>
)

}
