import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';


import './styles.css';
import logoImg from '../../assets/logo-small.svg'
import api from '../../services/api';
    
export default function Profiler(){

    const [produtos, setProdutos] = useState([]);

    const estabelecimentoNome = localStorage.getItem('estabelecimentoName');
    const estabelecimentoId = localStorage.getItem('estabelecimentoId');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: estabelecimentoId,
            }
        }).then(response => {
            setProdutos(response.data);
        })
    }, [estabelecimentoId]);

    async function handleDeleteProduct (id) {
        try {
            await api.get(`produtos/${id}`,
             {
                headers: {
                    Authorization: estabelecimentoId,
                }
            });

            console.log(estabelecimentoId);
        } catch (error) {
            alert('Errro ao deletar o produto');
        }
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt = "Logo" />
                <span>Bem vindo(a), {estabelecimentoNome}</span>
                <Link className="button" to="/produto/novo">Divulgar novo produto</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"> </FiPower>
                </button>
            </header>
            <h1>Produtos cadastrados</h1>
            <ul>
                {produtos.map(produto=> (
                    <li key={produto.id}>
                      <strong>{produto.name}</strong>
                      <p>Lanche</p>

                      <strong>Descrição:</strong>
                      <p>{produto.descricao}</p>
  
                      <strong>Valor:</strong>
                      <p>{Intl.NumberFormat('pt-BR', 
                      {style:'currency', currency:'BRL'}).format(produto.value)} </p>
                      <button onClick={()=> handleDeleteProduct(produto.id)} type="button">
                          <FiTrash2 size={20} color="#a8a8b3" />
                      </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}