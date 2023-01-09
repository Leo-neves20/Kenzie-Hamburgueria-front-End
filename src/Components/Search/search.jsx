import { useContext } from "react";
import { contextMainPageValues } from "../../context/main_page";
import SearchComponent from "./searchStyle";
import {ButtonPrimary} from "../buttons"

const Search = () => {

    const {
        cards, 
        setFiltro, 
        valueSearch, 
        setValueSearch
    } = useContext(contextMainPageValues)

    const product = (event) => {

        event.preventDefault()

        const valueFormated = valueSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        // eslint-disable-next-line array-callback-return
        const result = cards.filter(element => {

            const nameFormated  = element.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "")
 
            const categoryFormated = element.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

            if(valueFormated === nameFormated || valueFormated === categoryFormated){

                return element

            }

            if(valueFormated === "todos"){

                setFiltro([])

            }
            
        }) 

        setFiltro(result)

    }

    return (

        <>
            <SearchComponent onSubmit={product}>

                <input 
                    className="input" 
                    type="text" onChange={(event) => setValueSearch(event.target.value)} 
                    placeholder="Pesquisar..."
                />

                <ButtonPrimary type="submit">Pesquisar</ButtonPrimary>

            </SearchComponent>
        </>
        

    )

}


export default Search