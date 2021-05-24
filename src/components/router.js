import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Data from './data'
import Home from './home'


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/data'} component={Data} />
            </Router>
        )
    }
}

export default AppRouter