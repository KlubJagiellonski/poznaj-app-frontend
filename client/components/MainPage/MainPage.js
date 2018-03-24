import React from 'react';

import Header from '../Header';
import Content from './Content';
import Footer from './Footer';

import './styles';


export default function MainPage() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}
