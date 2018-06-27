import React from 'react';
import PropTypes from 'prop-types';

import KlubJagiellonskiLogo from 'public/images/klub_jagiellonski_logo.png';
import KodujDlaPolskiLogo from 'public/images/koduj_dla_polski_logo.png';

import './styles';


export default function Header({showTitle = true}) {
    return (
        <header className="main-header">
            {showTitle && (
                <h1>
                    <a href="/">PoznajApp</a>
                </h1>
            )}

            <div className="header-logos">
                <a href="http://klubjagiellonski.pl/" target="_blank">
                    <img src={KlubJagiellonskiLogo} alt="Logo Klubu Jagiellońskiego" />
                </a>
                <a href="https://kodujdlapolski.pl/" target="_blank">
                    <img src={KodujDlaPolskiLogo} alt="Logo Koduj dla Polski" />
                </a>
            </div>
        </header>
    );
}

Header.propTypes = {
    showTitle: PropTypes.bool
};
