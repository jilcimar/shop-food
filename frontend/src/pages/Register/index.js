import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg'
    

export default function Register () {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt = "Logo" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e divulgue seus produtos para as pessoas a encontrarem o que precisa.</p>
                    <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#E02041"/>
                            Não tenho cadastro
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="Nome do estabelecimento" />
                    <input type="email" placeholder="Endereço de e-mail" />
                    <input placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" width="80" />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}