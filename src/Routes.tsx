/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Games from './pages/Games.tsx'
import './styles/main.sass'
import GameOverview from './pages/GameOverview.tsx'
import Login from './pages/Login.tsx'
import { AuthProvider } from './contexts/auth.tsx'
import useAuth from './hooks/useAuth.tsx'
import Register from './pages/Register.tsx'
import Favorites from './pages/Favorites.tsx'
import FavoritesProvider from './contexts/favorites.tsx'

function Router(): JSX.Element {

  const Private = ({Item}: any): JSX.Element => {
    const { signed }: any = useAuth();
  
    return signed > 0 ? <Item /> : <Login />;
  }

  return (
    <>
    <AuthProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/games' element={<Games />}/>
            <Route path="/games/:title" element={<GameOverview />} />
            <Route path='/favorites' element={<Private Item={Favorites} />}/>
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </AuthProvider>
      
    </>
  )
}

export default Router
