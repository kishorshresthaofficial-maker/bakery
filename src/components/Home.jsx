import { Comewithus } from './Comewithus'
import { Hero } from './Hero'
import './Home.css'
import { Items } from './Items'
import { Navbar } from './Navbar'
import './Navbar.css'

export const Home = () => {
    return(
        <>
        <Hero/>
        <Items/>
        <Comewithus/>
        </>
    )
}