import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NoInsides from './NoInsides'
import Home from './Home'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoInsides/>} />
        <Route path="/noinsides" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;