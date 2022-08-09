import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <>
        <nav className='navbar'>

             <div className='icon'>
                <img className='icon' src="https://www.seekpng.com/png/full/373-3736371_white-dog-paw-vector.png" alt="icone" width="30px" height="30px" />
            
            <h1>PetAdote</h1>
        
            </div>
               <ul className="nav-items">
                <li>
                    <Link to="/home">Inicio</Link>
                </li>
                <li>
                    <Link to="/cats">Gatos</Link>
                </li>
                <li>
                    <Link to="/dogs">Cachorros</Link>
                </li>
                <li>
                    <Link to="/contact">Contato</Link>
                </li>
               </ul>
            
        </nav>
        </>
    )
}

export default Navbar;