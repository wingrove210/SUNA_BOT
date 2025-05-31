import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NoInsides from './pages/NoInsides'
import Home from './pages/Home/Home'
import './index.css'
import MainScreen from './pages/MainScreen'
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoInsides/>} />
        <Route path="/noinsides" element={<Home />} />
        <Route path='/main' element={<MainScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;