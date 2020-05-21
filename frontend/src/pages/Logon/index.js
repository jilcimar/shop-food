import React , {useState}from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';
import bannerImg from '../../assets/banner.png';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Logon () {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin (e) {
        e.preventDefault();

        try {
            const response = await api.post('session', {id});
            localStorage.setItem('estabelecimentoId', id);
            localStorage.setItem('estabelecimentoName', response.data.name);

            history.push('/perfil');
        } catch (error) {
            alert('Falha ao autenticar, tente novamente');
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt = "Logo" />
                <form>
                    <h1>Faça seu login</h1>
                     <input 
                     value={id}
                     onChange={e=> setId(e.target.value)}
                     placeholder="Sua ID" />
              
                    <button className="button" onClick={handleLogin} type="submit">Entrar</button>
                
                    <Link className="back-link" to="/cadastro">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img className="banner" src={bannerImg} alt = "Banner Home" />
        </div>
    );
}