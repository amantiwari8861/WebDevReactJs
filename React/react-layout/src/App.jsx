import { Route, Routes } from "react-router-dom"
import Layout from "./component/Layout";
import NotFound from "./component/NotFound";
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'
import SubjectCard from "./component/SubjectCard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/services/:subject" element={<SubjectCard />} />
            <Route path="/services/:subject/:name?" element={<SubjectCard />} />
            <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

// index.js  -> App -> Layout 
