import React, { Component } from 'react';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="copyright pull-right">
                    &copy; <script>document.write(new Date().getFullYear())</script>, made with <i className="fa fa-heart heart"></i> by <a href="https://marcos.im">Timm</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer ;