import React, { Component } from 'react';
import { Link } from 'gatsby';

export default class Navbar extends Component {

    state = {
        NavbarOpen: false,
        css: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path: '/',
                text: 'home' 
            },
            {
                id: 2,
                path: '/about',
                text: 'about' 
            },
            
        ]
    }

    navbarOpen = () => {
        this.state.navbarOpen ? this.setState({ 
            navbarOpen: false,
            css: 'collapse navbar-collapse'
        }) :
        this.setState({
            navbarOpen: true,
            css: 'collapse navbar-collapse show'
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-light">
                <Link to="/" className="navbar-brand">
                    Coffee Shop
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.navbarOpen}>
                    <span className="navbar-toggler-icon">&#9776;</span>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto">
                        {
                            this.state.links.map(link => {
                                return (
                                    <li key={link.id} className="nav-item">
                                        <Link to={link.path} className="nav-link text-capitalize">
                                            {link.text}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item">
                            <span className="snipcart-checkout nav-link text-capitalize">Checkout</span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
