import React, {useState, useEffect} from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";


export default function App() {
  const [size, setSize] = useState("")

  const url = "products?category=shoes"
  const {data: products, error, loading} = useFetch(url)

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  const filteredProducts = size 
  ? products.filter(product => product.skus.find(s => s.size === parseInt(size)))
  : products

  console.log("Filtered products : ", filteredProducts)

  if (error) throw error;

  if (loading) return <Spinner/>

  return (
    <>
      <div className="content">
        <Header />
        <main>
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
        </main>
      </div>
      <Footer />
    </>
  );
}
