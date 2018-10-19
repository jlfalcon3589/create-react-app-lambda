import React from 'react';
import { Navbar } from '@front10/landing-page-book/dist/components'
// import navbarBackground from '../../resources/navbar.svg';

export default class navbarWrapper extends React.Component {
    render() {
        return (
            <Navbar
                brandLink="https://front10.com"
                brandLogo="images/logo/front10.png"
                expand="md"
                leftItems={[
                    {
                        href: 'https://google.com',
                        icon: 'fa fa-google',
                        target: '_blank',
                        title: 'Google'
                    },
                    {
                        href: 'https://facebook.com',
                        icon: 'fa fa-facebook-official',
                        target: '_blank',
                        title: 'Facebook'
                    }
                ]}
                rightItems={[
                    {
                        title: 'Services'
                    },
                    {
                        title: 'Contact'
                    }
                ]}
            />
        );
    }
}