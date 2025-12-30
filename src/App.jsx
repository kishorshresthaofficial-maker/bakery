import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Shop } from "./components/Shop";
import { Home } from "./components/Home";
import { Pages } from "./components/Pages";
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
      </Routes>
  
      {/* <Footer/> */}
    </>
  )
}
export default App;