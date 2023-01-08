
const Cards = ({cards, setCart, cart, filtro,  purchaseAmount, setPurchaseAmount, valueSearch}) => {

    const addCart = (id) => {
        
        cards.map(element => {

            const newArray = cart.filter(element => element.id !== id)

            if(element.id === id){

                if(cart.includes(element)){

                    const card = cart.find(elem => elem.id === id)

                    card.amount += 1

                    setCart([...newArray, card])

                    setPurchaseAmount(purchaseAmount + card.price)


                }else{

                    element.amount = 1

                    setCart([...newArray, element])

                    setPurchaseAmount(purchaseAmount + element.price)

                }

            }
             
        })
         
        
    }

    return(
        <>
  
            {
                filtro.length !== 0 ? (

                    <>

                        <div className="mensagemResultadoPesquisa">
                            <h2>Resultado para:</h2>
                            <span>{valueSearch}</span> 
                        </div>
                    
                        <ul className="ulCards">
                        {

                            filtro.map(element => {

                                const {id, name, category, img, price} = element

                                return(

                                    <li key={id}>

                                        <img src={img} alt={name} />

                                        <div>
                                            <h3>{name}</h3>
                                            <span>{category}</span>
                                            <span>R$ {price}</span>
                                            <button className="btnPrimaryMedium" id={id} onClick={() => addCart(id)}>Adicionar</button>
                                        </div>

                                    </li>

                                )

                            })

                        }
                        </ul>

                    </>
                
                            
                )
                :
                (

                    <ul className="ulCards">
                    {

                        cards.map(element => {

                            const {id, name, category, img, price} = element

                            return(

                                <li key={id}>

                                    <img src={img} alt={name} />

                                    <div>
                                        <h3>{name}</h3>
                                        <span>{category}</span>
                                        <span>R$ {price}</span>
                                        <button className="btnPrimaryMedium" id={id} onClick={() => addCart(id)}>Adicionar</button>
                                    </div>

                                </li>

                            )

                        })

                    }
                    </ul>

                )

            }

        </>
        
    )

}

export default Cards