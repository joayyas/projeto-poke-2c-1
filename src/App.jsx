import {Routes, Route} from 'react-rourter-dom'
import Home from './Home'

const App = () => {

  return (
    <Routes>
     <Route path = "/" element={<Home/>}/>
    </Routes>
  )
}

export default App
