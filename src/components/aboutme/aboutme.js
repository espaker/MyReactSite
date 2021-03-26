import React from 'react'

import getTranslation from '../../translations/translations'

const AboutMe = ({lang}) => {
    const translation = getTranslation(lang, 'AboutMe')

    return (
        <section className="about section">
            <div className="section-inner">
                <h2 className="heading">{translation.Title}</h2>
                <div className="content">
                {translation.Desc} 
                </div>
            </div>              
        </section>
    )
}

export default AboutMe