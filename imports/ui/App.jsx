import React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom";
import {withRouter} from "react-router";

import DynRouter from './DynRouter';


const dynHello = (props) => <DynRouter pageName='Hello' {...props} />;
const dynInfo = (props) => <DynRouter pageName='Info' {...props} />;

export const App = withRouter(
    (props) => (
        <React.Fragment>
            <h1>Welcome to Meteor!</h1>
            <Route>
                <Switch>
                    <Route path="/grating" component={dynHello}/>
                    <Route path="/info" component={dynInfo}/>
                </Switch>
            </Route>
            <button onClick={() => props.history.push('/grating')}>Grating</button>
            <button onClick={() => props.history.push('/info')}>Info</button>
        </React.Fragment>
    )
);
