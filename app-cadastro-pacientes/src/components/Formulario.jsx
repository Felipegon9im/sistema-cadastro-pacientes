
import React, { useState } from "react";


const Formulario = () => {

    
    const camposIniciais = {

        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: ''
    }

    let {values, setValues} = useState (camposIniciais)
    
    return (
    <div className="container">

<form>
        <div className="form-group input-group col">
            <div className="input-grou-prepend">
                <div className="input-group group-text">
                    <i className="bi bi-person-badge"></i>
                </div>

            </div>
            <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompleto} />
        </div>
        <div className="row">
        <div className="form-group input-group col">
            <div className="input-grou-prepend">
                <div className="input-group group-text">
                    <i className="bi bi-person-badge"></i>
                </div>

                </div>
                <input className="form-control" placeholder="Telefone" name="telefone" value={values.telefone} />
            </div>
        </div>
        <div className="row">
        <div className="form-group input-group col">
            <div className="input-grou-prepend">
                <div className="input-group group-text">
                    <i className="bi bi-person-badge"></i>
                </div>

                </div>
                <input className="form-control" placeholder="E-mail" name="email" value={values.email} />
            </div>
            </div>

        </form>



    </div>  
        

    

    )
}
    export default Formulario;


