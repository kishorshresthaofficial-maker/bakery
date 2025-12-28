import { IoCart, IoSearch } from 'react-icons/io5'
import './Navbar.css'
import { FaRegUser } from 'react-icons/fa'
export function Navbar (){
    return(
        <>
            <div className="navigation">
                <div className="logo">
                    <img src="logo.svg" alt="" />
                </div>
                <div className="menu">
                    <div className="links">
                        <a href="#">Home</a>
                        <a href="#">Shop</a>
                        <a href="#">Pages</a>
                        <a href="#">Home</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="user-icons">
                    <div className="icon">
                        <a href="#"><IoSearch className='icon_style'/></a>
                    </div>
                     <div className="icon">
                        <a href="#"><IoCart className='icon_style'/></a>
                    </div>
                     <div className="icon">
                        <a href="#"><FaRegUser className='icon_style'/></a>
                    </div>
                </div>
            </div>

            <div className="hero">
                <div className="heroImg">
                      <img src="images/hero.jpg" alt="" />
                </div>
            </div>
        </>
    )
}