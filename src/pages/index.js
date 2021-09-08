import * as React from "react"
import ProfileAvatar from "../asset/kwabs-moji.png"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import { graphql } from "gatsby"


// styles
const Styles = {
  pageStyles: {
    color: "#232129",
    padding: 3,
    margin: "auto",
    textAlign: "left",
    maxWidth: 540,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  },
  headingStyles: {
    marginTop: 0,
    marginBottom: 64,

  },
  headingAccentStyles: {
    color: "#663399",
  },
  paraStyles: {
    textAlign: "left",
    fontSize: "24px",
    color: "rgb(95 93 99)"
  },
  avatar: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  linkStyle: {
    textDecoration: "none"
  },
  youTubeStyle: {
    color: "#FF0000",
  },
  twitterStyle: {
    color: "#9B0B7D",
  },

  gitHubStyle: {
    color: "#D827B3",
  },

  projectTitle: {
    marginTop: "4em",
    color: "#01081A"
  },
  projectContent: {
    backgroundColor: "#E8F7FA",
    minHeight: "400px",
    borderRadius: 5,
    padding: 1,
  },


}




const IndexPage = ({data}) => {
  return (
    <main style={Styles.pageStyles}>
      <title>K-Bollins Dev</title>
      <div style={{ width: "50%" }}>
        <img src={ProfileAvatar} style={Styles.avatar} alt="avator kbollins" />
      </div>
      <h1 style={Styles.headingStyles}>
        Hi, I'm
        <span style={Styles.headingAccentStyles}> Kwabena Adu-Darkwa </span>
      </h1>
      <div>
        <p style={Styles.paraStyles}>I love design, product and engineering</p>
        <p style={Styles.paraStyles}>Currently focusing on <span style={{ color: "#FF0000" }}>frontend</span> development</p>
        <p style={Styles.paraStyles}>I share my tech journey on <span style={Styles.youTubeStyle}> <a style={Styles.linkStyle} rel="noreferrer" href="https://www.youtube.com/c/TheKBollinsShow/videos" target="_blank"> YouTube</a>
        </span> , my thoughts on <span style={Styles.youTubeStyle} > <a style={Styles.linkStyle} rel="noreferrer" href="https://twitter.com/darkwa_kwabena" target="_blank">  Twitter </a></span>   and my open source projects on
          <span style={Styles.gitHubStyle}> <a style={Styles.linkStyle} href="https://github.com/kwabena53" rel="noreferrer" target="_blank">  GitHub </a></span> </p>
      </div>
      <h2 style={Styles.projectTitle}>Projects</h2>
      <div style={Styles.projectContent}>
        {/* <ProjectCard title="Auto Vet" desc="in the middle attackmain in the middle attackmain in the middle attackmain in the middle attack" icon={ProfileAvatar} alt="Auto vet project" />
        <ProjectCard title="Auto Vet" desc=" in the middle attackmain in the middle attackmain in the middle attackmain in the middle attack" icon={ProfileAvatar} alt="Auto vet project" />
        <ProjectCard title="Auto Vet" desc="main in the middle attack" icon={ProfileAvatar} alt="Auto vet project" /> */}

        {
          data.allMdx.nodes.map((node) => (
            <ProjectCard
                key={node.id}
                title={node.frontmatter.title}
                desc={node.frontmatter.description}
                link={node.frontmatter.link}
                // icon={ProfileAvatar}
            />
        ))
        }

      </div>
    </main>
  )
}

export const query = graphql`
query{
  allMdx {
    nodes {
      frontmatter {
        date
        link
        title
        description
      },
      id,
      slug
    }
  }
}`


export default IndexPage
