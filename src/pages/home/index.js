import React, { Component, Fragment } from 'react';
import { Navbar, Sidebar, Section, Aside } from '../../components';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <main>
                    <div className="container">
                        <Sidebar />
                        <Section />
                        <Aside />
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Home;
