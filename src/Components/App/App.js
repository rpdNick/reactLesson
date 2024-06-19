import "./App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Blog from "../sections/Blog";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import ProductItem from "../Products/ProductItem/ProductItem";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Header data={props.data.header} />
      <Routes>
        <Route path="/" element={<Main data={props.data.main}/>} />
        <Route path="/all-products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products/:productId" element={<ProductItem />} />
      </Routes>
      <Footer data={props.data.footer} />
    </div>
  );
}

export default App;
