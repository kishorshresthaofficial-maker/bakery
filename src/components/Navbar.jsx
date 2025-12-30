import { IoCart, IoSearch } from 'react-icons/io5'
import './Navbar.css'
import { FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router'
export function Navbar (){
    return(
        <>
            <div className="navigation">
                <div className="logo">
                    <img src="logo.svg" alt="" />
                </div>
                <div className="menu">
                    <div className="links">
                        <Link to= "/">Home</Link>
                        <Link to="/shop">Shop </Link>
                       <Link to="/pages">Pages </Link>
                       <Link to="/blog">Blog </Link>
                       <Link to="/contact">Contact </Link>
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

        </>
    )
}