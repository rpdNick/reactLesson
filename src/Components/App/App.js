import "./App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../rout-sections/About";
import Contact from "../rout-sections/Contact";
import Blog from "../rout-sections/Blog";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Header data={props.data.header} />
      <Routes>
        <Route path="" element={<Main data={props.data.main}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <Main data={props.data.main} /> */}
      <Footer data={props.data.footer} />
    </div>
  );
}

export default App;
