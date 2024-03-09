import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Products.css"
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios("https://dummyjson.com/products")
            .then(response => setProducts(response.data.products))
    }, [])
    console.log(products)
  return (
    <div>
        {
            products.map(item => (
                <div className='main' key={item.id}>
                    <ul className='wrapper'>
                        <li className='item'> Title: {item.title}</li>
                        <li className='item'> Brand: {item.brand}</li>
                        <li className='item'> Category: {item.category}</li>
                        <li className='item'> Description: {item.description}</li>
                        <li className='item'> Discount: {item.discountPercentage}</li>
                        <li className='item'>Price: ${item.price}</li>
                        <li className='item'> Rating: {item.rating}</li>
                        <li className='item'> Stock: {item.stock}</li>
                        <Link to={`${item.id}`}><img width={250} src={item.images[0]} alt="" /></Link>
                    </ul>
                </div>
            ))
        }
    </div>
  )
}
export default Products