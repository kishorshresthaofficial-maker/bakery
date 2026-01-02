import './Blog.css'
import { formatDate } from './helpers/formatDate';

export const BlogCard = ({value})=> {
    console.log(value.author);
    return(
        <>
                    <div className="blogImg">
                         <img src={value.urlToImage} alt={value.title} />
                    </div>

                    <div className="blogSubHead">
                        <div className="author">
                            <h4><span className="highlighter">{value.author}</span></h4>
                        </div>

                        <div className="publishDate">
                            - {formatDate(value.publishedAt)} 
                        </div>
                    </div>

                    <div className="blogTitle">
                        <h2>{value.title}</h2>
                    </div>
                    <div className="blogContent">
                        <p>{value.content}</p>
                </div>
        </>
    )
}

