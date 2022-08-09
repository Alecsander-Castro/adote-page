import Navbar from "./Navbar";
import Footer from "./Footer";

const Componente = ({children}) => {
    return (
        <>
        <Navbar/>
          <div className="main-container">
          {children}
          </div>
          <Footer/>
        </>
        )
}

export default Componente;