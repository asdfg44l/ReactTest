import React from 'react';
import Topbar from './Topbar';
import Content from './Content';
import Footer from './Footer';

//img
// import lobo from 'assets/image/wolf.png';

function Layout(props) {
    return (
        <div className="layout">
            <Topbar>
                {props.Topbar}
            </Topbar>
            <Content>
                <h1>Create React App</h1>
                {props.Content}
            </Content>
            <Footer />
        </div>
    )
}

export default Layout;