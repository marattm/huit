import React, { Component } from 'react';


class Footer extends Component {

    render() {
        let footerStyle = {
            position: 'relative',
            bottom: '0',
            textAlign: 'center',
        }
        return (
            <div style={footerStyle}>
                <hr />
                <p style={{ color: 'white', textAlign: 'center' }}><em> The Book App - Marat Tulepbayev-Monnie - 2018 - <a href="https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_1280.jpg">Original picture</a></em></p>
            </div>
        )
    }
}


export default Footer;

