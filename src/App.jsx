import { Routes, Route } from 'react-router'

import Footer from './components/Footer'
import Menu from './components/Menu'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <div className="App">
      <div>
        <Menu />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
