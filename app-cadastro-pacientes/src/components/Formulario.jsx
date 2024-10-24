import React from 'react';

const Formulario = () => {




    return (
        <form className="w-100">
            <div className="form-row">
                {/* Input 1: Nome Completo */}
                <div className="col-md-4 mb-3">
                    <label htmlFor="nomeCompleto"><i className="bi bi-person-fill"></i> Nome Completo</label>
                    <input type="text" className="form-control" id="nomeCompleto" placeholder="Nome Completo" />
                </div>

                {/* Input 2: Telefone */}
                <div className="col-md-4 mb-3">
                    <label htmlFor="telefone"><i className="bi bi-phone-fill"></i> Telefone</label>
                    <input type="text" className="form-control" id="telefone" placeholder="Telefone" />
                </div>

                {/* Input 3: E-mail */}
                <div className="col-md-4 mb-3">
                    <label htmlFor="email"><i className="bi bi-envelope-fill"></i> E-mail</label>
                    <input type="email" className="form-control" id="email" placeholder="E-mail" />
                </div>
            </div>
        </form>
    );
}

export default Formulario;
