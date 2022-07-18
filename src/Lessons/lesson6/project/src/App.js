import { BrowserRouter as Router , Link, Route , Routes} from "react-router-dom";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
  </Router>
  );
}

