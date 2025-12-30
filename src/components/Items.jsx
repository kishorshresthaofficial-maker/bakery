import { FaArrowRightLong } from 'react-icons/fa6';
import './Items.css';
import { PiArrowRightThin } from 'react-icons/pi';
import { Link } from 'react-router';

export const Items = () => {
    return(
        <>
            <div className="container">
                <div className="item_section">
                    <div className="item_head">
                        <h1>FOR A SWEET DAY</h1>
                        <p className='subhead'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt</p>
                    </div>

                    <div className="product_items">
                            <div className="product_item_inner">
                                <div className="product_item_holder">
                                    <img src="products/m1-prod-1.jpg" alt="" />
                                </div>

                                <div className="product_title">
                                    <h3>Italian Loaf</h3>
                                    <span className="price">$4.99</span>
                                    <div className="arrow">
                                     <Link to="/product-variable">
                                         <PiArrowRightThin className='arrowLink'/>
                                     </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="product_item_inner">
                                <div className="product_item_holder">
                                    <img src="products/m1-prod-2.jpg" alt="" />
                                </div>

                                <div className="product_title">
                                    <h3>Italian Loaf</h3>
                                    <span className="price">$4.99</span>
                                    <div className="arrow">
                                     <Link to="/product-variable">
                                         <PiArrowRightThin className='arrowLink'/>
                                     </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="product_item_inner">
                                <div className="product_item_holder">
                                    <img src="products/m1-prod-3.jpg" alt="" />
                                </div>

                                <div className="product_title">
                                    <h3>Italian Loaf</h3>
                                    <span className="price">$4.99</span>
                                    <div className="arrow">
                                     <Link to="/product-variable">
                                         <PiArrowRightThin className='arrowLink'/>
                                     </Link>
                                    </div>
                                </div>
                            </div>


                    </div>
                </div>
            </div>
        </>
    )
}