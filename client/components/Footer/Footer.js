import React from 'react';

import './styles';


export default function Footer() {
    return (
        <footer>
            <div className="footer-publisher">
                <span className="footer-list-title">Wydawca:</span>
                <ul>
                    <li><a href="http://klubjagiellonski.pl/" target="_blank">Klub Jagielloński</a></li>
                    <li><a href="mailto:rafal.gawlik@kodujdlapolski.pl" target="_blank">kontakt</a></li>
                </ul>
            </div>
            <div className="footer-team">
                <span className="footer-list-title">Zespół:</span>
                <ul>
                    <li><a href="https://krzysztofzuraw.com/" target="_blank">Krzysztof Żuraw</a></li>
                    <li>Klementyna Marszałek</li>
                    <li>Maciej Węgrecki</li>
                </ul>
                <ul>
                    <li><a href="https://github.com/Salezjana" target="_blank">Mikołaj Rodkiewicz</a></li>
                    <li><a href="https://github.com/radekgronski" target="_blank">Radosław Groński</a></li>
                    <li>Jakub Stefanowski</li>
                </ul>
                <ul>
                    <li><a href="https://rafalgawlik.github.io" target="_blank">Rafał Gawlik</a></li>
                </ul>
            </div>
        </footer>
    );
}
