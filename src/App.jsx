import { useState } from 'react'
import './App.css'
import About from './componentes/About'
import Contact from './componentes/Contact'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Main from './componentes/Main'
import Tienda from './componentes/Tienda'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Main/>
      <About />
      <Tienda />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
