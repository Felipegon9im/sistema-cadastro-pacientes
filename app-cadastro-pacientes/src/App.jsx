import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Cadastro from './components/cadastro';
import Rodape from './components/Rodape';


function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
      <div className="container-fluid">
                <div className='row'>
                      <div className="col-md-8 offset-md-2 ">
                    
                        <Cadastro/>
                        <Rodape />
                      </div>
                </div>

 </div>
    </>
  )
}

export default App;