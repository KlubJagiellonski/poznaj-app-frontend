import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Content from './Content';

import './styles';


export default function MainPage() {
    return (
        <div className="main-page-container">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}
