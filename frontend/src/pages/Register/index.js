import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg'
    

export default function Register () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister (e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('estabelecimentos' , data);
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (error) {
            alert('Erro no cadastro, tente novamente.');
        }
    }
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
                <form onSubmit={handleRegister}>
                    <input 
                    value={name} 
                    onChange={e=>setName(e.target.value)} 
                    type="text" placeholder="Nome do estabelecimento" />
                    <input 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)} 
                    type="email" placeholder="Endereço de e-mail" />
                    <input 
                     value={whatsapp} 
                     onChange={e=>setWhatsapp(e.target.value)} 
                     placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input 
                         value={city} 
                         onChange={e=>setCity(e.target.value)} 
                         placeholder="Cidade" 
                        />
                        <input 
                        value={uf} 
                        onChange={e=>setUf(e.target.value)} 
                        placeholder="UF" width="80" />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}