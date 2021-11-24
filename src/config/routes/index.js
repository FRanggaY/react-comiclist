import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router , Routes as Switch, Route } from 'react-router-dom';
import { Home } from '../../pages';
import { Settings } from '../../pages';
import {connect} from 'react-redux';
import {LightGlobalStyles, DarkGlobalStyles} from '../../theme';


class Routes extends Component {
    render() {
        return (
            <Fragment>
                {this.props.theme === 'lightTheme'&& <LightGlobalStyles/> }
                {this.props.theme === 'darkTheme'&& <DarkGlobalStyles/> }
                <Router>
                    <Switch>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/settings" element={<Settings/>}></Route>
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme,
    }
}

export default connect(mapStateToProps)(Routes);
