import React, { Component, Fragment } from 'react';
import { Navbar, Sidebar, SettingsSection } from '../../components';

class Settings extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <main>
                    <div className="container">
                        <Sidebar />
                        <SettingsSection />
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Settings;
