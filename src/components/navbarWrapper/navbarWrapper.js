import React from 'react';

import navbarBackground from '../../resources/navbar.svg';

const leftItems = [
    {
        as: 'a',
        content: 'Documentation',
        href: 'https://react.semantic-ui.com/',
        icon: 'book',
        key: 'docs',
        target: '_blank',
    },
]
const rightItems = [
    {
        as: 'a',
        content: 'Github',
        href: 'https://github.com/Semantic-Org/Semantic-UI-React',
        icon: 'github',
        key: 'github',
        target: '_blank',
    },
    {
        as: 'a',
        content: 'Stack Overflow',
        icon: 'stack overflow',
        href: 'https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=votes',
        key: 'so',
        target: '_blank',
    },
]



export default class navbarWrapper extends React.Component {
    render() {
        console.log(navbarBackground);
        return (
            <nav style={{ backgroundImage: navbarBackground }} className="uk-navbar uk-navbar-container uk-margin">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        {
                            leftItems.map((item) => {
                                return (
                                    <li key={item.content} className="uk-parent"><a href={item.content}>{item.content}</a></li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        {
                            rightItems.map((item) => {
                                return (
                                    <li key={item.content} className="uk-parent"><a href={item.content}>{item.content}</a></li>
                                );
                            })
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}