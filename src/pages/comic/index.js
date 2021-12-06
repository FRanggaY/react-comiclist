import React, { Component, Fragment } from 'react';
import { Navbar, Sidebar, ComicSection } from '../../components';

class Settings extends Component {
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

export default Settings;
