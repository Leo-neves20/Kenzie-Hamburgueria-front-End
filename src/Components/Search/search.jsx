
import style from "./search.module.css";

const Search = ({cards, setFiltro, valueSearch, setValueSearch}) => {

    const product = (event) => {
        event.preventDefault()

        const valueFormated = valueSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        const result = cards.filter(element => {

            const nameFormated     = element.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "")
            
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
            <form className={style.form} onSubmit={product}>

                <input className="input" type="text" onChange={(event) => setValueSearch(event.target.value) } placeholder="Pesquisar..."/>

                <button className="btnPrimaryMedium" type="submit">Pesquisar</button>

            </form>
        </>
        

    )

}


export default Search