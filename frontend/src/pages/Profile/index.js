import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';


import './styles.css';
import logoImg from '../../assets/logo-small.svg'
    
export default function Profiler(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt = "Logo" />
                <span>Bem vindo a Shop Food</span>
                <Link className="button" to="/produto/novo">Divulgar novo produto</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"> </FiPower>
                </button>
            </header>
            <h1>Produtos cadastrados</h1>
            <ul>
                <li>
                    <strong>x - burguer</strong>
                    <p>Lanche</p>

                    <strong>Descrição:</strong>
                    <p>Vem pão, ovo, queijo</p>

                    <strong>Valor:</strong>
                    <p>R$ 5,000 </p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>x - burguer</strong>
                    <p>Lanche</p>

                    <strong>Descrição:</strong>
                    <p>Vem pão, ovo, queijo</p>

                    <strong>Valor:</strong>
                    <p>R$ 5,000 </p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>x - burguer</strong>
                    <p>Lanche</p>

                    <strong>Descrição:</strong>
                    <p>Vem pão, ovo, queijo</p>

                    <strong>Valor:</strong>
                    <p>R$ 5,000 </p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>x - burguer</strong>
                    <p>Lanche</p>

                    <strong>Descrição:</strong>
                    <p>Vem pão, ovo, queijo</p>

                    <strong>Valor:</strong>
                    <p>R$ 5,000 </p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}