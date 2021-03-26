import React from 'react'

import getTranslation from '../../translations/translations'

const WorkExperience = ({lang}) => {
    const translation = getTranslation(lang, 'WorkExperience')

    return (
        <section className="experience section">
            <div className="section-inner">
                <h2 className="heading">{translation.Title}</h2>
                <div className="content">
                    {translation.Jobs.map((job, key) => {
                        return(
                            <div key={key} className="item">
                            <h3 className="title">
                                <b>{job.Title}</b> - <span className="place">
                                    <a href={job.Website} target="_blank">{job.Company}</a> {/* eslint-disable-line */}
                                </span> <span className="year">({job.Period})</span></h3>
                                <p>{job.Desc}</p>
                            </div>
                        )
                    })}
                </div> 
            </div>                
        </section>
    )
}

export default WorkExperience