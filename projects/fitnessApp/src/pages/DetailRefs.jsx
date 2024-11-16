import React, { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../services/useFetch';
import Spinner from '../components/Spinner';
import Page404 from './Page404';

const DetailRefs = ({addToCart}) => {
  const { id } = useParams()
  const skuRef = useRef()
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

      <select 
        id="size" 
        ref={skuRef}
      >
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
            const sku = skuRef.current.value

            if (!sku) return alert("Select size.")

            addToCart(product.id, sku)
            navigate("/cart")
          }}
        >
          Add to cart
        </button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}

export default DetailRefs
