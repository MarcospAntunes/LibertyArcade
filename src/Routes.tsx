import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Home from './pages/Home'
import Games from './pages/Games'

function Router() {

  return (
    <>
      <BrowserRouter>
      <GlobalStyles />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
