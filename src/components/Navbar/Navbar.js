import React, { Component } from 'react';
import Logo from '../../assets/img/Wishlist.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavToggled: false
        }
    }

    handleToggle = () => {
        this.setState(prevState => ({
            isNavToggled: !this.state.isNavToggled
        }));
    }

    render() {        
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src={Logo} alt="logo" />
                    </a>

                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a role="button" className={`navbar-burger burger ${this.state.isNavToggled ? 'is-active' : ''}`} onClick={this.handleToggle} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                
                <div id="navbarBasicExample" className={`navbar-menu ${this.state.isNavToggled ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <a className="navbar-item">
                            Hjem
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <a className="navbar-item">
                            Om WishList
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;