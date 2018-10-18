import React from 'react';

import logo from '../../resources/logo.svg';
import react from '../../resources/react.svg';
import love from '../../resources/love.svg';
import front10 from '../../resources/front10.svg';
import firebase from '../../resources/firebase.svg';
import bootstrap from '../../resources/bootstrap.svg';

import './style.css';

export default class footerWrapper extends React.Component {

    render() {
        return (
            <footer>
                <div className="uk-container uk-padding-small">
                    <div className="uk-grid-small uk-child-width-expand@s uk-text-center uk-grid"
                        uk-grid uk-height-match="target: > div > .card">
                        <div>
                            <div className="card uk-padding-large">
                                <img alt='logo' src={logo} width="150" />
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <h2><small>Design</small></h2>
                                <p>Esta es una prueba de un texto que apareceria en esta parte de la página
                                    para rellenar contenido de la página web
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <h2><small>Design</small></h2>
                                <p>Esta es una prueba de un texto que apareceria en esta parte de la página
                                    para rellenar contenido de la página web
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <h2><small>Design</small></h2>
                                <p>Esta es una prueba de un texto que apareceria en esta parte de la página
                                    para rellenar contenido de la página web
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="uk-divider"></div>
                    <div className="footer-bottom uk-text-center">
                        <p>
                            Made with <span><img alt='love' src={love} width="16" /></span> using
                            <span className="framework"><img alt='react' src={react} width="16" /></span>
                            <span className="framework"><img alt='bootstrap' src={bootstrap} width="16" /></span>
                            <span className="framework"><img alt='front10' src={front10} width="16" /></span>
                            <span className="framework"><img alt='firebase' src={firebase} width="16" /></span>
                        </p>
                    </div>
                </div>

            </footer >
        );
    }
}