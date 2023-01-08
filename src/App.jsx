
import { useState, useEffect } from 'react';
import './App.css';
import Cards from './Components/Cards/cards';
import Cart from './Components/Cart';
import Search from './Components/Search/search';
import instance from './Service/Axios/axios';
import logoPrincipal from "./Assets/logoPrincipal.svg"


function App() {

  const [cards, setCards]                    = useState([])
  const [cart, setCart]                      = useState([])
  const [valueSearch, setValueSearch]        = useState("")
  const [filtro, setFiltro]                  = useState([])
  const [purchaseAmount, setPurchaseAmount]  = useState(0)

  useEffect(() => {

    instance.get("products")
     .then(({data}) => setCards(data))
     .catch(err => console.log(err))

  },[])

  return (
    <>
       <header className='headerPage'>

          <img src={logoPrincipal} alt="Burguer Kenzie" />
          <div>
            <Search cards={cards}  setFiltro={ setFiltro} valueSearch={valueSearch} setValueSearch={setValueSearch} />
          </div>
          
       </header>
       <main className='contentPage'>

        <section>

          <Cards cards={cards} cart={cart} setCart={setCart} valueSearch={valueSearch} filtro={filtro} purchaseAmount={purchaseAmount} setPurchaseAmount={setPurchaseAmount} />

          <Cart cart={cart} setCart={setCart} cards={cards} purchaseAmount={purchaseAmount} setPurchaseAmount={setPurchaseAmount}/>

        </section>

       </main>
    </>
   

  );
}

export default App;
