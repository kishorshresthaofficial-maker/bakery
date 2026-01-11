import { Link } from 'react-router'
import './Categories.css'
import { useEffect, useState } from 'react'



export const Categories = ()=>{

    const [itemCategory, setItemCategory] = useState([])
    const [category, setCategory] = useState("cake")

    // const fetchCategory = async ()=> {
    //     // console.log("Console is here")
    //      const response = await fetch(`https://newsapi.org/v2/everything?category=${category}&sortBy=publishedAt&apiKey=095191cc977b4a02bf13057f61ad6edf`)
    //      const data = await response.json()
    //     setItemCategory(data.articles);
    // }
    const items = [
      {
        name:"blueberry cake",
        price:40,
        image: "djdj",
        category : "cake"
      },
       {
        name:"blueberry cake",
        price:40,
        image: "djdj",
        category : "muffin"
      },
    ]

    const filteredItems = items.filter((prod,index)=>prod.category === category)
// console.log(filteredItems,"filtered")

      // const filteredCategory = data.filter((prod, index)=>prod.category === category)

    return(
        <>
               <div className="categories">
                      <div className="categoryTitle">
                        <h2>Categories</h2>
                      </div>

                      <div className="categoryLists">

                      
                {/* <Link to="/product-category" state={{ items: itemCategory, category}}>Cake</Link> */}
                        <Link to="/blog/cake" onClick={()=>setCategory("cake")}>Cake</Link>
                        <a href="/">Cupcake</a>
                        <a href="#">Doughnut</a>
                        <Link to="/blog/muffin" onClick={()=>setCategory("muffin")}>Muffin</Link>
                        <a href="#">Brownie</a>
                        <a href="#">Pastery</a>
                        <a href="#">Waffle</a>
                      </div>
                </div>
        </>
    )
}