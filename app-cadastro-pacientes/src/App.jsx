import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';
import Cadastro from './components/cadastro';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <Cadastro/>

        
      </div>
      

        
      
    </>
  )
}

export default App;