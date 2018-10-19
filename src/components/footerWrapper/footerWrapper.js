import React from 'react';

// import icons
import logo_icon from '../../resources/logo.svg';
import react_icon from '../../resources/react.svg';
import love_icon from '../../resources/love.svg';
import front10_icon from '../../resources/front10.svg';
import firebase_icon from '../../resources/firebase.svg';
import bootstrap_icon from '../../resources/bootstrap.svg';

import {
    Footer,
    Row,
    Column,
    Image,
    Social
} from '@front10/landing-page-book/dist/components'

import './style.css';
export default class footerWrapper extends React.Component {

    render() {
        return (
            <Footer>
                <Row className="container align-items-center">
                    <Column className="col-12 col-sm-6 col-md-3">
                        <Image className="img-fluid p-3" src={logo_icon} />
                    </Column>
                    <Column className="col-12 col-sm-6 col-md-3">
                        <h2><small>Design</small></h2>
                        <p>Esta es una prueba de un texto que apareceria en esta parte de la página
                            para rellenar contenido de la página web
                        </p>
                    </Column>
                    <Column className="col-12 col-sm-6 col-md-3">
                        Columna 1
                    </Column>
                    <Column className="col-12 col-sm-6 col-md-3">
                        <Social url="http://localhost/" directLink={false} type="facebook" />
                        <Social directLink={false} type="google" />
                        <Social directLink={false} type="twitter" />
                        <Social directLink={false} type="ok" />
                    </Column>
                </Row>
                <hr />
                <Row className="footer-bottom text-center">
                    <Column className="col-12">
                        <span>
                            Made with <span><img alt='love' src={love_icon} width="16" /></span> using
                            <span className="framework"><Image alt='react' src={react_icon} width="16" /></span>
                            <span className="framework"><img alt='bootstrap' src={bootstrap_icon} width="16" /></span>
                            <span className="framework"><img alt='front10' src={front10_icon} width="16" /></span>
                            <span className="framework"><img alt='firebase' src={firebase_icon} width="16" /></span>
                        </span>
                    </Column>
                </Row>
            </Footer>
        );
    }
}