import React from 'react';
import {renderToString} from 'react-dom/server';
import {onPageLoad} from 'meteor/server-render';
import {StaticRouter} from 'react-router';
import {object} from 'prop-types';
import {Helmet} from 'react-helmet';
import Main from '../both';


onPageLoad(
    (sink) => {
        const context = {};

        const onPage = (page) => {
            return sink && sink.request && sink.request.url && sink.request.url.pathname
                && new RegExp('^' + page.replace('/', '\/') + '$').test(sink.request.url.pathname);
        };

        const App = props => <StaticRouter location={props.location} context={context}>
            <Main onPage={onPage}/>
        </StaticRouter>;

        App.propTypes = {location: object.isRequired};

        sink.renderIntoElementById('react-target', renderToString(<App location={sink.request.url}/>));

        const helmet = Helmet.renderStatic();
        sink.appendToHead(helmet.meta.toString());
        sink.appendToHead(helmet.title.toString());
    }
);
