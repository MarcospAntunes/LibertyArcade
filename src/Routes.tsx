import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Games from './pages/Games.tsx'
import './styles/main.sass'

function Router(): JSX.Element {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
