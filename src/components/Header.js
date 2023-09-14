import React from 'react'
import './Main.css'


function Header() {
    return (

        <>
            
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand mx-3" href="/">VERGE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-1">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link" href="/">TechFest</a>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link" href="/">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-end">
                        <a className="nav-item mx-2" href="/">Insta</a>
                        <a className="nav-item mx-2" href="/">Twit</a>
                        <a className="nav-item mx-2 " href="/">Link</a>
                    </div>
                </div>
            </nav>

            <div className="container-fluidmx-0">
                <img className='image' src='../cover.png' alt="" />
            </div>


        </>
    )
}

export default Header
