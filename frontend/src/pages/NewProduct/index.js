import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo-small.svg'
    
export default function NewProduct(){

    const [name, setName] = useState('');
    const [descricao, setDescricacao] = useState('');
    const [value, setValue] = useState('');

    const history  = useHistory();

    const estabelecimentoId = localStorage.getItem('estabelecimentoId');

    async function newProduct (e) {
        e.preventDefault();
        const data = {
            name,
            descricao,
            value,
        };

        try {
            await api.post('/produtos', data, {
                headers: {
                    Authorization: estabelecimentoId,
                }
            });

            history.push('/perfil');
        } catch (error) {
            alert('Erro ao cadastrar produto, tente de novo');
        }
    }

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
                <input type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Nome do produto" />
                <textarea type="text" 
                    value={descricao}
                    onChange={e => setDescricacao(e.target.value)}
                    placeholder="Descrição do item" />
                <input 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Valor em reais"/>
                <button onClick={newProduct} className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}