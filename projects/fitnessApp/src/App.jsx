import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./App.css";


const App = () => {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) ?? []
    } catch {
      return []
    }
  })

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart])

  const addToCart = (id, sku) => {
    setCart((items) => {
      console.log("Hey i'm the item : ", items)
      const itemInCart = items.find(item => item.sku === sku)
      if (itemInCart) {
        return items.map( (i) => i.sku === sku ? {...i, quantity: i.quantity++} : i)
      } else {
        return [...items, {id, sku, quantity: 1}]
        
      }
    })
  }

  const updateQuantity = (sku, quantity) => {
    setCart((items) => {
      return quantity === 0 
      ? items.filter((i) => i.sku !== sku) 
      : items.map( (i) => i.sku === sku ? {...i, quantity: quantity} : i)
    })
  }

  const emptyCart = () => {
    setCart([])
  }

  return (
    <>
    <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Caryed Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail addToCart={addToCart}/>} />
            <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} />} />
            <Route path="/checkout" element={<Checkout cart={cart} emptyCart={emptyCart}/>} />
          </Routes>
        </main>
    </div>
    <Footer />
    </>
  );
}

export default App
