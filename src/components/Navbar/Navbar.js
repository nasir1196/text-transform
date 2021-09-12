import React from 'react';

const Navbar = ( props ) =>
{
    const { mode, home, enableDark, btnText } = props;

    return (
        <>
            <nav className={ `navbar navbar-expand-lg navbar-${ mode } bg-${ mode }` }>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{ home }</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-link">
                                Home
                            </li>
                            <li className="nav-item nav-link">
                                About
                            </li>


                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="button">Search</button>
                        </form> */}
                    </div>
                    <div className={ `form-check form-switch text-${ mode === "light" ? "dark" : "light" }` }>
                        <input className={ `form-check-input bg-${ mode === "light" ? "dark" : "light" }` } type="checkbox" id="switch-box" onClick={ enableDark } />
                        <label htmlFor="switch-box">{ btnText }</label>
                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;