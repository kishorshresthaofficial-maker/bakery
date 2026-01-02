import './Navbar.css'
import './Blog.css'
import { BlogCard } from './BlogCard'
import { IoSearch } from 'react-icons/io5'
import { Categories } from './Categories'
import { Outlet } from 'react-router'

export const Blog = ()=> {
    const bakeryNews = [
        {
  source: {
    id: null,
    name: "Disneytouristblog.com"
  },
  author: "Tom Bricker",
  title: "Top 10 Hotel Lobbies at Disney World Resorts",
  description: "One of the defining features of the best Walt Disney World hotels is their lavish lobbies. Location, transportation, on-site perks, pools and dining are usually what convinces guests to book one resort versus another, but common areas, their themed design and…",
  url: "https://www.disneytouristblog.com/best-disney-world-hotel-lobbies/",
  urlToImage: "https://www.disneytouristblog.com/wp-content/uploads/2025/11/lobby-grand-floridian-resort-deluxe-hotel-disney-world-3052.jpg",
  publishedAt: "2025-12-29T14:14:54Z",
  content: "One of the defining features of the best Walt Disney World hotels is their lavish lobbies. Location, transportation, on-site perks, pools and dining are usually what convinces guests to book one reso… [+16560 chars]"
},
{
  source: {
    id: null,
    name: "Ipadizate.com"
  },
  author: "Gabriela Martínez",
  title: "Starbucks ha lanzado una cámara retro barata que vas a querer tener y no vas a poder comprar",
  description: "Cada año, la llegada de la temporada festiva transforma los mostradores de Starbucks en una vitrina de objetos alusivos a la temporada, que rápidamente se vuelven virales. Si bien la marca ha potenciado su popularidad navideña a través de sus icónicos vasos r…",
  url: "https://ipadizate.com/tecnologia/starbucks-ha-lanzado-una-camara-retro-barata-que-vas-a-querer-tener-y-no-vas-a-poder-comprar",
  urlToImage: "https://ipadizate.com/hero/2025/12/starbucks-retro-digital-camera.png?width=1200",
  publishedAt: "2025-12-29T16:00:32Z",
  content: "Starbucks dejó el cafe de lado y apostó por la nostalgia de los recuerdos\r\nCada año, la llegada de la temporada festiva transforma los mostradores de Starbucks en una vitrina de objetos alusivos a la… [+1895 chars]"
},


    ]
    return(
        <>
            <div className="banner">
                <img src="images/blog-bg.jpg" alt="" />
            </div>

           <div className="blog_section">
               <div className="bakeryBlog">

                {bakeryNews.map((item, index)=>(
                     <BlogCard key={index} value={item}/>
                ))}

               </div>

               <div className="blog_right_panel">
                    <div className="innerRight">

                        <div className="searchbox">
                            <div className="searchinput">
                              <form action="#" className='searchPanel'>
                                  <div className="formInput">
                                    <input type="text" placeholder='Search entire store....'/>
                                  </div>
                                  <div className="searchBttn">
                                     <a href="#"><IoSearch className='searchIconBtn'/></a>
                                  </div>
                              </form>
                            </div>
                        </div>

                 <Categories/>

                    </div>
               </div>

           </div>
           <Outlet/>

        </>
        
    )
}

