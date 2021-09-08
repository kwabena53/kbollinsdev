import React from "react"

import {outerCard, cardDesc, cardTitle, innerCard, textContent} from "./ProjectCard.module.css"

const ProjectCard = ({icon, title, desc, link}) => {

    return(
        <a style={{textDecoration: "none"}} href={link} target="_blank" rel="noreferrer">
        <div className={outerCard}>
            <div className={innerCard}>
                <div className={icon}>
                    <img src={icon} width="100%" alt={desc}></img>
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