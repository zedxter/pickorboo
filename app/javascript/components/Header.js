import React from 'react';

import Navigation from './Navigation';
import logo from '../../assets/images/logo.jpg';

export default class Header extends React.PureComponent {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="logo">
                        <a href='/'>
                            <img src={logo} alt="Pick Or Boo!" />
                        </a>
                    </div>
                    <Navigation />
                </div>
                <div className="delimiter"></div>
            </header>
        );
    }
}
