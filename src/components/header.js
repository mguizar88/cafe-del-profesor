import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ siteTitle, logo, facebook, instagram }) => (
  <header
    className="flex justify-center bg-white shadow-xl"
  >
    <nav
      className="relative flex justify-center sm:justify-between w-full sm:w-4/5 p-5"
    >
        <div className="flex items-center sm:hidden absolute inset-y-0 left-3">
          <button className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset">
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <Link
          className="w-40"
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <Img className="w-full" fluid={logo} />
        </Link>
        <div className="hidden sm:block">
          <div className="flex justify-end">
            <a className="w-8 mx-4">
              <Img className="w-full" fluid={instagram} />
            </a>
            <a className="w-8">
              <Img className="w-full" fluid={facebook} />
            </a>
          </div>
          <div className="flex">
            <Link to="/" className="mx-4">
              Inicio
            </Link>
            <Link to="/blog/" className="mx-4">
              Blog
            </Link>
            <Link to="/menu/" className="mx-4">
              Menú
            </Link>
            <Link to="/reservacion/" className="ml-4">
              Reservación
            </Link>
          </div>
        </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
