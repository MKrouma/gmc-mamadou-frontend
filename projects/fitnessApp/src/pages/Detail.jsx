import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../services/useFetch';
import Spinner from '../components/Spinner';
import Page404 from './Page404';

const Detail = ({addToCart}) => {
  const [sku, setSku] = useState("")
  const { category, id } = useParams()
  const navigate = useNavigate()

  const url = `products/${id}`
  const {data: product, error, loading} = useFetch(url)

  if (error) throw error;
  if (loading) return <Spinner/>
  if (!product) return <Page404/>

  console.log("Product skus : ", product.skus)
  product.skus.map((skuElt) => {
    console.log("Hey : ", skuElt)
  })

  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
      <select id="size" value={sku} onChange={(e) => (setSku(e.target.value))}>
        <option value="">What size?</option>
        { product.skus.map((skuElt) => (
          <option key={skuElt.sku} value={skuElt.sku}>
            {skuElt.size}
          </option>
        ))}
      </select>
      <p>
        <button 
          className='btn btn-primary' 
          onClick={() => {
            navigate("/cart")
            addToCart(product.id, sku)
          }}
          disabled={!sku}
        >
          Add to cart
        </button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}

export default Detail
