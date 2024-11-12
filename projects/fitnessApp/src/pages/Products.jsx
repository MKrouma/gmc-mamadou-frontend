import React, {useState} from "react";
import Spinner from "../components/Spinner";
import useFetch from "../services/useFetch";
import { useParams } from "react-router-dom";
import Page404 from "./Page404";
import { Link } from "react-router-dom";

export default function Products() {
  const [size, setSize] = useState("")
  const { category } = useParams();

  const url = `products?category=${category}`
  const {data: products, error, loading} = useFetch(url)

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`/${category}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </Link>
      </div>
    );
  }

  const filteredProducts = size 
  ? products.filter(product => product.skus.find(s => s.size === parseInt(size)))
  : products

  console.log("Filtered products : ", filteredProducts)

  if (error) throw error;
  if (loading) return <Spinner/>
  if (filteredProducts.length == 0) return <Page404/>

  return (
    <>
        <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select id="size" value={size} onChange={(e) => (setSize(e.target.value))}>
                <option value="">All sizes</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
        </section>

        {size && 
        <h3>
            Found {filteredProducts.length} items
        </h3>
        }

        <section id="products">
            {filteredProducts.map(renderProduct)}
        </section>
    </>
  );
}
