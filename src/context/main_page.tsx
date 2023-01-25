import React, { createContext, useEffect, useState } from "react";
import { iCardProduct, iChildren } from "../interface/interfaces";
import instance from "../Service/Axios/axios";

interface iContextMainPage{
    cards: iCardProduct[]
    setCards: React.Dispatch<React.SetStateAction<iCardProduct[]>>
    cart: iCardProduct[]
    setCart: React.Dispatch<React.SetStateAction<iCardProduct[]>>
    filtro: iCardProduct[]
    setFiltro: React.Dispatch<React.SetStateAction<iCardProduct[]>>
    valueSearch: string
    setValueSearch: React.Dispatch<React.SetStateAction<string>>
    purchaseAmount: number
    setPurchaseAmount: React.Dispatch<React.SetStateAction<number>>
}

export const contextMainPageValues = createContext({} as iContextMainPage)

const MainPageContext = ({children}: iChildren) => {

    const [cards, setCards]                    = useState<iCardProduct[]>([])
    const [cart, setCart]                      = useState<iCardProduct[]>([])
    const [filtro, setFiltro]                  = useState<iCardProduct[]>([])
    const [valueSearch, setValueSearch]        = useState<string>("")
    const [purchaseAmount, setPurchaseAmount]  = useState<number>(0)

    useEffect(() => {

    instance.get("products")
        .then(({data}) => setCards(data))
        .catch(err => console.log(err))

    },[])

    return (
        <contextMainPageValues.Provider value={{
            cards, 
            setCards,
            cart, 
            setCart,
            filtro, 
            setFiltro,
            valueSearch, 
            setValueSearch,
            purchaseAmount, 
            setPurchaseAmount
        }}>
            {children}
        </contextMainPageValues.Provider>
    )

}

export default MainPageContext
