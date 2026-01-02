import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Shop } from "./components/Shop";
import { Home } from "./components/Home";
import { Pages } from "./components/Pages";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { ProductCategory } from "./components/ProductCategory";
// import { Footer } from "./components/Footer";



function App(){
  return(
    <>

      <Navbar/>
      {/* <Shop/> */}
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/shop" element= { <Shop/> } />
        <Route path="/pages" element= { <Pages/> } />
        <Route path="/blog" element={ <Blog/> }/>

      
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/blog/:category" element= { <ProductCategory/> }/>

      </Routes>
  
      {/* <Footer/> */}
    </>
  )
}
export default App;