import { useState } from 'react'
import { Categories } from './Categories'
import './Categories.css'


export const ProductCategory = ()=>{


    return(
        <>
            <div className="product_category">
                <div className="left_product_category">
                    <div className="productCategoryTitle">
                    <h3>Category</h3>
                </div>

                <div className="product_category_grid">
                    <div className="product_grid">
                        <div className="gridlist">
                            <div className="categoryImg">
                                <img src="/products/m1-prod-1.jpg" alt="" />
                            </div>
                            <div className="productCatDetails">
                                <div className="productCatTitle">
                                    <h3>Brownie</h3>
                                </div>
                                <div className="price">
                                    <h6>$4.99</h6>
                                </div>
                            </div>
                        </div>

                        <div className="gridlist">
                            <div className="categoryImg">
                                <img src="/products/m1-prod-1.jpg" alt="" />
                            </div>
                            <div className="productCatDetails">
                                <div className="productCatTitle">
                                    <h3>Brownie</h3>
                                </div>
                                <div className="price">
                                    <h6>$4.99</h6>
                                </div>
                            </div>
                        </div>

                        <div className="gridlist">
                            <div className="categoryImg">
                                <img src="/products/m1-prod-1.jpg" alt="" />
                            </div>
                            <div className="productCatDetails">
                                <div className="productCatTitle">
                                    <h3>Brownie</h3>
                                </div>
                                <div className="price">
                                    <h6>$4.99</h6>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                </div>

                <div className="right_product_category">
                    <Categories/>
                </div>
            </div>
        </>
    )
}