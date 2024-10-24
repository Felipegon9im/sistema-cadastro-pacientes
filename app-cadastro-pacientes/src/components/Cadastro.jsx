import React from "react";
import Formulario from './formulario';


const Cadastro = () => {
    return (
        <div className="w-100 d-flex flex-column align-items-center">
            {/* Jumbotron: Apenas para título e descrição */}
            <div className="jumbotron jumbotron-fluid w-100 text-center custom-background">
                <div className="container">
                    <h1 className="display-4">Cadastro de Pacientes</h1>
                    <p className="lead">Este é um sistema de cadastro de paciente utilizando React.js, Bootstrap, firebase e Vite.js.</p>
                </div>
            </div>

            {/* Formulário fora da jumbotron */}
            <div className="w-100 d-flex justify-content-center my-4">
                <Formulario />
            </div>

            {/* Lista de Pacientes */}
            <div className="w-100 text-center">
               
            </div>
        </div>
    );
}

export default Cadastro;
