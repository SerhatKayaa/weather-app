import React from 'react';
import Header from '../container/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import SearchByName from './SearchByName';
import Home from './Home';

const App = () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <div>
                    <Route path='/login' exact component={Login} />
                    <Route path='/search_by_name' exact component={SearchByName} />
                    <Route path='/' exact component={Home} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;