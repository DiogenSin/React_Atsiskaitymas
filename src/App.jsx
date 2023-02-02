import './styles/main.css';
import Header from './components/organisms/Header';
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login';
import Registration from './components/pages/Registration'
import Home from './components/pages/Home'
import Footer from './components/organisms/Footer';
import UserContext from './components/contexts/UserContexts';
import { useContext } from 'react';
import AddPage from './components/pages/AddPage';

function App()  {

  const { loggedIn } = useContext(UserContext)

  return (
    <>
    
    <Header />  
    <main>
        <Routes>
          {
            loggedIn ?
            <>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddPage />} />
            </>
            :
            <>
            <Route path='/home' element={<Login />} />
            <Route path='/add' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            </>
          }
          <Route path='/' element={<Login />} />
          <Route path='*' element={<h1>404 tokio puslapio net nėra</h1>} />
        </Routes>
    </main>
    <Footer />
    
    </>


  )
}

export default App;
