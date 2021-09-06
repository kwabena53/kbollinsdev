import React from "react"

import {outerCard, cardDesc, cardTitle, innerCard, textContent, imageIcon} from "./ProjectCard.module.css"

const ProjectCard = ({icon, title, desc, alt}) => {

    return(
        <a style={{textDecoration: "none"}} href="/">
        <div className={outerCard}>
            <div className={innerCard}>
                <div className={icon}>
                    <img src={icon} width="100%" className={imageIcon} alt={alt}></img>
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