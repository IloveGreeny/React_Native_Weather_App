import { BrowserRouter as Router , Link, Route , Routes} from "react-router-dom";
import React from "react";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";

export default function App() {
  const About = React.lazy(()=> import("./Components/About/About"));
  const Blogs = React.lazy(()=> import("./Components/Blogs/Blogs"));
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={
      <React.Suspense fallback={<>Loading...</>}>
        <About />
      </React.Suspense>
      }/>
        <Route path="/blogs" element={
      <React.Suspense fallback={<>Loading...</>}>
          <Blogs />
      </React.Suspense>
      }/>
      </Route>
    </Routes>
  </Router>
  );
}

