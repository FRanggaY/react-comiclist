import React, { Component, Fragment } from 'react';
import { Navbar, Sidebar, ComicSection } from '../../components';

class Comic extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <main>
                    <div className="container">
                        <Sidebar />
                        <ComicSection />
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Comic;
