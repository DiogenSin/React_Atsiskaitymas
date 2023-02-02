import './styles/main.css';
import Header from './components/organisms/Header';
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login';
import Registration from './components/pages/Registration'
import Home from './components/pages/Home'
import Footer from './components/organisms/Footer';

function App()  {


  return (
    <>
    
    <Header />  
    <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='*' element={<h1>404 tokio puslapio net nėra</h1>} />
        </Routes>
    </main>
    <Footer />
    
    </>


  )
}

export default App;
