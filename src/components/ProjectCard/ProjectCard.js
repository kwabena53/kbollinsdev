import React from "react"

import {outerCard, cardDesc, cardTitle, innerCard, textContent, iconStyles} from "./ProjectCard.module.css"
import { CheckIcon } from "../../asset/Icons"

const ProjectCard = ({ title, desc, link}) => {

    return(
        <a style={{textDecoration: "none"}} href={link} target="_blank" rel="noreferrer">
        <div className={outerCard}>
            <div className={innerCard}>
                <div className={iconStyles}>
                    <CheckIcon width="40px"/>
                </div>
                <div className={textContent}>
                    <div className={cardTitle}>{title}</div>
                    <div className={cardDesc}>{desc}</div>
                </div>
            </div>
        </div>
        </a>
    )
}



export default ProjectCard