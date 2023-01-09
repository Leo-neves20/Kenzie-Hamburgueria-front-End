import { useContext } from "react"
import { contextMainPageValues } from "../../context/main_page"
import MensageSearch from "../Search/mensageSearch"
import {Card, UlCards} from "./cardsStyle"
import {ButtonPrimary} from "../buttons"

const Cards = () => {

    const {
        cards, 
        setCart, 
        cart, 
        filtro,  
        purchaseAmount, 
        setPurchaseAmount, 
        valueSearch
    } = useContext(contextMainPageValues)

    const addCart = (id) => {
        
        // eslint-disable-next-line array-callback-return
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
                        <div className="containerProdutctsAndMessageSeach">
                            <MensageSearch>
                                <h2>Resultado para:</h2>
                                <span>{valueSearch}</span> 
                            </MensageSearch>
                        
                            <UlCards>
                            {

                                filtro.map(element => {

                                    const {id, name, category, img, price} = element

                                    return(

                                        <Card key={id}>

                                            <img src={img} alt={name} />

                                            <div>
                                                <h3>{name}</h3>
                                                <span>{category}</span>
                                                <span>R$ {price}</span>
                                                <ButtonPrimary 
                                                    id={id} 
                                                    onClick={() => addCart(id)}
                                                >
                                                    Adicionar
                                                </ButtonPrimary>
                                            </div>

                                        </Card>

                                    )

                                })

                            }
                            </UlCards>
                        </div>

                    </>
                         
                )
                :
                (

                    <UlCards>
                    {

                        cards.map(element => {

                            const {id, name, category, img, price} = element

                            return(

                                <Card key={id}>

                                    <img src={img} alt={name} />

                                    <div>
                                        <h3>{name}</h3>
                                        <span>{category}</span>
                                        <span>R$ {price}</span>
                                        <ButtonPrimary 
                                            id={id} 
                                            onClick={() => addCart(id)}
                                        >
                                            Adicionar
                                        </ButtonPrimary>
                                    </div>

                                </Card>

                            )

                        })

                    }
                    </UlCards>
                )
            }
        </>
 
    )

}

export default Cards