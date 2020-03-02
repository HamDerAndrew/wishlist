import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "Made with ❤️ by Andrew Larsen"
        }
    }
    render() {
        return(
            <footer className="footer has-background-primary">
                <div className="content has-text-centered">
                    <p>{this.state.msg}</p>
                </div>
            </footer>
        )
    }
}

export default Footer;