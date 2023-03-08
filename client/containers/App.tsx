import React, {FC} from "react";
import {Router, Switch, Route,} from 'react-router-dom';
import history from "../history";
import Header from "../layout/header/Header";

const App: FC = () => {
    return <Router history={history}>
        <Header>
            <Switch>
                <Route exact path="/" render={() => <div>hi</div>}/>
            </Switch>
        </Header>
    </Router>
}

export default App;