import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import News from "./News/News";
import School from "./School/School";
import Contact from "./Contact/Contact";
import ArticlePage from "./Articles/ArticlePage";
import ArticlePage2 from "./Articles/ArticlePage2";
import ArticlePage3 from "./Articles/ArticlePage3";
import ArticlePage4 from "./Articles/ArticlePage4";
import ArticlePage5 from "./Articles/ArticlePage5";
import ArticlePage6 from "./Articles/ArticlePage6";
export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/school" element={<School/>}/>
            <Route path="/news/article" element={<ArticlePage/>}/>
            <Route path="/news/article2" element={<ArticlePage2/>}/>
            <Route path="/news/article3" element={<ArticlePage3/>}/>
            <Route path="/news/article4" element={<ArticlePage4/>}/>
            <Route path="/news/article5" element={<ArticlePage5/>}/>
            <Route path="/news/article6" element={<ArticlePage6/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}
