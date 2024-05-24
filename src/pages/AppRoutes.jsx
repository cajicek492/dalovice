import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import News from "./News/News";
import School from "./School/School";
import Contact from "./Contact/Contact";
export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/school" element={<School/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
