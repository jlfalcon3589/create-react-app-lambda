import React from 'react'

import AppRouter from './appRouter';
import Navbar from './components/navbarWrapper/navbarWrapper';
import Footer from './components/footerWrapper/footerWrapper';

import './styles.css';

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