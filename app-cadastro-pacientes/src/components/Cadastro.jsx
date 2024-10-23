import React from "react";
import Formulario from './formulario';

const Cadastro = () => {
    return (
        <div className="w-100 custom-background d-flex flex-column align-items-center">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Cadastro de Pacientes</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            <div className="row mx-0 w-100 justify-content-center">
                <div className="col-md-5">
                    <Formulario />
                </div>
                <div className="col-md-5">
                    <h1>Lista de Pacientes</h1>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
