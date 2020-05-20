import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';
import bannerImg from '../../assets/banner.png'
import logoImg from '../../assets/logo.svg'


export default function Logon () {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt = "Logo" />
                <form>
                    <h1>Faça seu login</h1>
                     <input placeholder="Sua ID" />
                     <Link  to="/perfil">
                        <button className="button" type="submit">Entrar</button>
                    </Link>
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