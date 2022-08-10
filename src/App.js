import {BrowserRouter as Router, Routes , Route } from 'react-router-dom';


import Home from './pages/Home';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import Contact from './pages/Contact'
import Componente from './components/Componente';



function App() {

            
  return (
    <>
    <Router>
      <Componente>
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/cats' element={<Cats/>}/>
        <Route exact path='/dogs' element={<Dogs/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      </Componente>
    </Router>
    </>
  )
}

export default App;
