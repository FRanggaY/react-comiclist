import React, { Component, Fragment } from 'react';
import { Navbar, Sidebar, HomeSection, Aside } from '../../components';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <main>
                    <div className="container">
                        <Sidebar />
                        <HomeSection />
                        <Aside />
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Home;
