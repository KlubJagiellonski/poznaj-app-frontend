import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './components/App';

import './main.less';


WebFont.load({
    google: {
        families: ['Lato']
    }
});


ReactDOM.render(<App />, document.getElementById('root'));
