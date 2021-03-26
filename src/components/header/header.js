import React from 'react'
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import getTranslation from '../../translations/translations'

import profile from '../../images/profile.png'

const Header = ({lang}) => {
    const translation = getTranslation(lang, 'Header')

    return (
        <header className="header">
            <Container className="clearfix">                       
                <img className="profile-image img-fluid float-left" src={profile} alt="Espaker Kaminski" />
                <div className="profile-content float-left">
                    <h1 className="name">{translation.Name}</h1>
                    <h2 className="desc">{translation.Desc}</h2>   
                    <ul className="social list-inline">
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/espaker/" target="_blank"> {/* eslint-disable-line */}
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="http://github.com/espaker/" target="_blank"> {/* eslint-disable-line */}
                                <FontAwesomeIcon icon={faGithubAlt}/>
                            </a>
                        </li>               
                    </ul> 
                </div>
                <a className="btn btn-cta-primary float-right" href="https://wa.me/5548996465692" target="_blank"> {/* eslint-disable-line */}
                    <FontAwesomeIcon icon={faWhatsapp}/>
                    {translation.Contact}
                </a>              
            </Container>
        </header>
    )
}

export default Header