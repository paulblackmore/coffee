import React from 'react'

export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col mx-auto col-md-6 text-center">
                        <p>The Coffee Company &copy; {new Date().getFullYear().toString()}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
