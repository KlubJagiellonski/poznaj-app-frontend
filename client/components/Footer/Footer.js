import React from 'react';

import './styles';


export default function Footer() {
    return (
        <footer>
            <div className="footer-publisher">
                <span className="footer-list-title">Wydawca:</span>
                <ul>
                    <li><a href="http://kj.org.pl">Klub Jagielloński</a></li>
                </ul>
            </div>
            <div className="footer-team">
                <span className="footer-list-title">Zespół:</span>
                <ul>
                    <li><a href="https://krzysztofzuraw.com/">Krzysztof Żuraw</a></li>
                    <li>Klementyna Marszałek</li>
                    <li>Maciej Węgrecki</li>
                </ul>
                <ul>
                    <li><a href="https://github.com/Salezjana">Mikołaj Rodkiewicz</a></li>
                    <li>Radosław Groński</li>
                    <li>Jakub Stefanowski</li>
                </ul>
                <ul>
                    <li><a href="https://rafalgawlik.github.io">Rafał Gawlik</a></li>
                </ul>
            </div>
        </footer>
    );
}
