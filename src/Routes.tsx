import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Games from './pages/Games.tsx'
import './styles/main.sass'
import GameOverview from './pages/GameOverview.tsx'

function Router(): JSX.Element {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />}/>
          <Route path="/game/:title" element={<GameOverview />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
