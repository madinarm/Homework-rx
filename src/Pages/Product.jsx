import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductView = () => {
  const { id } = useParams()
  const [info, setInfo] = useState(null)
  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`).then(response => setInfo(response.data))

  }, [])
  console.log(info)
  return (
    <div>
      { info ?
        <div className='main'>
          <ul className='wrapper'>
            <li className='item'> Title: {info.title}</li>
            <li className='item'> Brand: {info.brand}</li>
            <li className='item'> Category: {info.category}</li>
            <li className='item'> Description: {info.description}</li>
            <li className='item'> Discount: {info.discountPercentage}</li>
            <li className='item'>Price: ${info.price}</li>
            <li className='item'> Rating: {info.rating}</li>
            <li className='item'> Stock: {info.stock}</li>
            <li><img width={250} src={info.images[0]} alt="" /></li>
          </ul>
        </div>
        :
        ""
      }
    </div>
  )
}

export default ProductView