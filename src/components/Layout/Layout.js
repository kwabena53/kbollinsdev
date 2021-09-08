
import * as React from 'react'
import {} from "./Layout.module.css"

const pageStyles = {
  color: "#232129",
  padding: 3,
  margin: "auto",
  textAlign: "left",
  maxWidth: 540,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const Layout = ({ pageTitle, children }) => {
  return (
      <main style={pageStyles} >
        <h1>{pageTitle}</h1>
        {children}
      </main>
  )
}
export default Layout