import React from 'react';

const Rodape = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    {/* Coluna 1: Sobre */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Sobre</h5>
                        <p>
                            Esse é um sistema de cadastro de pacientes desenvolvido para facilitar o controle e o registro de dados médicos. 
                            Sinta-se à vontade para entrar em contato conosco para mais informações.
                        </p>
                    </div>

                    {/* Coluna 2: Contato */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contato</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <i className="bi bi-envelope-fill"></i> contato@clinica.com
                            </li>
                            <li>
                                <i className="bi bi-telephone-fill"></i> (48) 9 8862-8030
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3: Redes Sociais */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Siga-nos</h5>
                        <ul className="list-unstyled d-flex justify-content-start">
                            <li>
                                <a href="https://facebook.com" className="me-3 text-dark"><i className="bi bi-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://instagram.com" className="me-3 text-dark"><i className="bi bi-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com" className="text-dark"><i className="bi bi-github"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center p-3 custom-background text-dark">
                © 2024 Todos os direitos reservados: 
                <a className="text-dark" href="https://github.com/Felipegon9im">  Felipegondim.com</a>
            </div>
        </footer>
    );
}

export default Rodape;
