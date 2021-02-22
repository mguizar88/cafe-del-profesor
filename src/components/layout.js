/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "./header"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: {eq: "logo-cafe-del-profesor.png"}) {
        childImageSharp{
          fluid(maxWidth: 230, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      instagram: file(relativePath: {eq: "instagram.png"}) {
        childImageSharp{
          fluid(maxWidth: 30, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      facebook: file(relativePath: {eq: "fb.png"}) {
        childImageSharp{
          fluid(maxWidth: 30, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <>
      <Header 
        siteTitle={ data.site.siteMetadata?.title || `Title` } 
        logo={ data.logo.childImageSharp.fluid }
        facebook={ data.facebook.childImageSharp.fluid }
        instagram={ data.instagram.childImageSharp.fluid }
      />
      <main>{children}</main>
      <footer
        style={{
          background: 'rgb(212,165,89)',
          background: 'linear-gradient(0deg, rgba(212,165,89,1) 86%, rgba(209,168,100,1) 87%, rgba(167,208,239,1) 100%)', 
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 py-8 sm:px-36">
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-xl">Contáctanos</h3>
            <a target="_Blank" href="mailto: lifecanbesosimplecafe@gmail.com">
              lifecanbesosimplecafe@gmail.com
            </a>
            <a target="_Blank" href="tel: 9982530428">
              9982530428
            </a>
            <p>
              Av Nichupte. Cancún, Mexico <br/>
              México. CP: 77500
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-xl">Enlaces rápidos</h3>
            <a href="#">
              Políticas de privacidad
            </a>
            <a href="#">
              Políticas de cookies
            </a>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-xl">Síguenos</h3>
            <div className="flex mt-4">
              <a target="_Blank" href="instagram.com" className="w-8 inline-flex mr-4">
                <Img className="w-full" fluid={data.instagram.childImageSharp.fluid} />
              </a>
              <a target="_Blank" href="facebook.com" className="w-8 inline-flex">
                <Img className="w-full" fluid={data.facebook.childImageSharp.fluid} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
