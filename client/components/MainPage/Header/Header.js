import React from 'react';

import KlubJagiellonskiLogo from 'public/images/klub_jagiellonski_logo.png';
import KodujDlaPolskiLogo from 'public/images/koduj_dla_polski_logo.png';

import './styles.less';


export default function Header ({showTitle = true}) {
    return (
        <header className="main-header">
            {showTitle && <h1>PoznajApp</h1>}

            <div className="header-logos">
                <a href="http://kj.org.pl/" target="_blank">
                    <img src={KlubJagiellonskiLogo} alt="Logo Klubu Jagiellońskiego" />
                </a>
                <a href="https://kodujdlapolski.pl/" target="_blank">
                    <img src={KodujDlaPolskiLogo} alt="Logo Koduj dla Polski" />
                </a>
            </div>
        </header>
    );
}
