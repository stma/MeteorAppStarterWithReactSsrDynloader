import React, {Component} from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {onPageLoad} from 'meteor/server-render';

import Main from '../both';


const onPage = (page) => {
    return window.location.pathname && new RegExp('^' + page.replace('/', '\/') + '$').test(window.location.pathname);
};

class App extends Component {

    render() {
        return <BrowserRouter>
            <Main onPage={onPage}/>
        </BrowserRouter>;
    }
}

onPageLoad(
    () => hydrate(<App/>, document.getElementById('react-target'))
);
