import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo-small.svg'
    
export default function NewProduct(){
    return (
        <div className="new-product-container">
        <div className="content">
            <section>
                <img src={logoImg} alt = "Logo" />
                <h1>Cadastrar novo produto</h1>
                <p>Descreva o item detalhadamente para que alguém possa se interessar por ele.</p>
                <Link className="back-link" to="/perfil">
                    <FiArrowLeft size={16} color="#E02041"/>
                        Voltar
                </Link>
            </section>
            <form>
                <input type="text" placeholder="Nome do produto" />
                <textarea type="text" placeholder="Descrição do item" />
                <input placeholder="Valor em reais"/>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}