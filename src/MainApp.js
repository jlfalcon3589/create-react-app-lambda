import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "@front10/landing-page-book/dist/themes/default/index.css"
import "./styles.css"

import AppRouter from './appRouter';
import Navbar from './components/navbarWrapper/navbarWrapper';
import Footer from './components/footerWrapper/footerWrapper';
export default class MainApp extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <AppRouter />
                <Footer />
            </div>
        );
    }
}