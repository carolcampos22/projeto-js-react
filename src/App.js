import React, { useState, useEffect } from 'react';
import './App.css';
import { Filters } from "./Components/Filters/Filters"
import { Home } from "./Components/ProductList/Home/Home"
import { Cart } from "./Components/ShoppingCart/Cart/Cart"
import { Header } from "./Components/Header/Header"
import { GlobalStyled } from './GlobalStyles';
import { productList } from './assets/productList'
import { Footer } from './Components/Footer/Footer';


<GlobalStyled />

function App() {
  const [minFilter, setMinFilter] = useState(-Infinity)
  const [maxFilter, setMaxFilter] = useState(Infinity)
  const [searchFilter, setSearchFilter] = useState("")


  const handleMinFilter = (event) => {
    setMinFilter(event.target.value)

  }

  const handleMaxFilter = (event) => {
    setMaxFilter(event.target.value)
  }

  const handleSearchFilter = (event) => {
    setSearchFilter(event.target.value)
  }


  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const newProduct = cart.find((item) => item.id === product.id);
    if (newProduct === undefined) {
      setCart([...cart, { ...product, amount: 1 }]);
    } else {
      const newCart = cart.map((item) =>
        item.id === product.id ? { ...newProduct, amount: newProduct.amount + 1 } : item
      );
      setCart(newCart);
    }
  };

  const deleteProductToCart = (product) => {
    const productToDelete = cart.find((item) => item.id === product.id);
    if (productToDelete.amount > 1) {
      const newCart = cart.map((item) =>
        item.id === product.id ? { ...productToDelete, amount: productToDelete.amount - 1 } : item
      );
      setCart(newCart);
    } else {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
    }
  };

  const productsCart = cart.map((product) => (
    <Cart deleteProductToCart={deleteProductToCart} product={product} key={product.id} />
  ));

  let soma = 0;
  for (let prod of cart) {
    const multiplyProds = prod.price * prod.amount;
    soma = soma + multiplyProds;
  }
  return (
    <>
      <Header />
      <br />
      <div className="App">


        <div>
          <Filters
            minFilter={minFilter}
            maxFilter={maxFilter}
            searchFilter={searchFilter}
            handleMinFilter={handleMinFilter}
            handleMaxFilter={handleMaxFilter}
            handleSearchFilter={handleSearchFilter}

          />
        </div>


        <div className='produtos-renderizados'>

          <Home

            productList={productList}
            addToCart={addToCart}
            searchFilter={searchFilter}
            minFilter={minFilter}
            maxFilter={maxFilter}
            handleMinFilter={handleMinFilter}
            handleMaxFilter={handleMaxFilter}
            handleSearchFilter={handleSearchFilter}
          />
        </div>


        <div className='carrinho'>
          <h2>Carrinho</h2>

          {soma === 0 ? (<p>Seu carrinho está vazio! Escolha seus produtos e eles aparecerão aqui!</p>) : (
            <div>
              {productsCart}
              <p>Valor total: R${soma.toFixed(2)}</p>
            </div>)}

        </div>

      </div>
      <Footer />
    </>
  );
}

export default App;
