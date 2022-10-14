import React from 'react';

const Layout = (props) => {
    //console.log(props.children);
    return (
        <div style={{ border: '10px solid black', margin: '10px' }}>
            <article>{props.children}</article>
            <button>Click!</button>
        </div>
    );
};

export default Layout;
