import React from 'react';
import {FiLogIn} from 'react-icons/fi';
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
                     <button className="button" type="submit">Entrar</button>

                        <a href="/registre">
                            <FiLogIn size={16} color="#E02041"/>
                            Não tenho cadastro
                        </a>
                </form>
            </section>

            <img src={bannerImg} alt = "Banner Home" />
        </div>
    );
}