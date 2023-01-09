import { useContext } from "react"
import { contextMainPageValues } from "../../context/main_page"
import { CardCart, CartSection } from "./cartStyled"

const Cart = () => {

    const {
        cart, 
        setCart, 
        purchaseAmount, 
        setPurchaseAmount
    } = useContext(contextMainPageValues)

    const deleteAllProdcts = () => {

        setCart([])
        setPurchaseAmount(0)

    }

    const deleteProduct = (id) => {

        const filtro  = cart.filter(element => element.id !== id)
        const product = cart.find(element => element.id === id)
        
        let price =  product.amount * product.price

        setPurchaseAmount(purchaseAmount - price)

        setCart(filtro)

    }

    const addUnits = (id) => {

        const card = cart.find(element => element.id === id)
        card.amount += 1
        const newArray = cart.filter(element => element.id !== id)

        setCart([...newArray, card])

        setPurchaseAmount(purchaseAmount + card.price)

    }

    const removeUnits = (id) => {

        const card = cart.find(element => element.id === id)

        if(card.amount > 1){

            card.amount -= 1
            const newArray = cart.filter(element => element.id !== id)

            setCart([...newArray, card])


            setPurchaseAmount(purchaseAmount - card.price)

        }
        
    }

    return(

        <CartSection>  
            <header className="headerCart">
                <h1>Carrinho de compras</h1>
            </header>

            <ul className="ulCart">
            {    
                cart.length === 0 ? (

                    <div className="ulCart__mensagem">

                        <p>Sua sacola está vazia</p>
                        <span>Carrinho Vazio</span>

                    </div>

                )
                :
                (

                    cart.map(element => {

                        return(

                            <CardCart key={element.name}>

                                <img src={element.img} alt={element.name} />
                                <div className="containerConteudos">
                                    <div className="containerConteudos__nomeCategoria">

                                        <h3>{element.name}</h3>
                                        <span>{element.category}</span>

                                    </div>
                                    <div className="containerConteudos__btn">

                                        <button onClick={() => deleteProduct(element.id)}>Remover</button>

                                        <div className="btn__containarAmaunt">

                                            <button className="btnPrimaryMedium" type="button" onClick={() => removeUnits(element.id)} >-</button>

                                            <span>{element.amount}</span>

                                            <button className="btnPrimaryMedium" type="button" onClick={() => addUnits(element.id)}>+</button>

                                        </div>

                                    </div>
                                    
                                </div>
                            </CardCart>

                        )

                    })

                )
            
            }
            </ul>
            <div className="boxTotalCart">
                <div>
                    <span>Total:</span>
                    <span>R$ {purchaseAmount.toFixed(2)}</span>
                </div>
                
                <button className="btnGrayMedium" onClick={() => deleteAllProdcts()}>Remover Todos</button>
            </div>

        </CartSection>

        
    )

}

export default Cart