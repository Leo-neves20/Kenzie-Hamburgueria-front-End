import Cards from "../Components/Cards/cards";
import Cart from "../Components/Cart";
import Header from "../Components/headerPageStyle";
import Logo from "../Components/logo";
import Search from "../Components/Search/search";

const MainPage = () => {

    return (
        <>
            <Header>

              <Logo />

              <div>
                <Search />
              </div>
              
            </Header>
           <main className='contentPage'>
    
                <section>
        
                <Cards/>
        
                <Cart />
        
                </section>
    
           </main>
        </>
       
      );

}

export default MainPage