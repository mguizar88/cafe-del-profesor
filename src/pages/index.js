import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"

const IndexPage = ({ data }) => {

  const mainSliderBackground = data.home_slider_background.childImageSharp.fluid
  const dishes = data.dishes.childImageSharp.fluid

  const logoGold = data.logoGold.childImageSharp.fluid
  const recomendacionesTitle = data.recomendaciones.childImageSharp.fluid
  const recomendacionesBackground = data.recomendacionesBackground.childImageSharp.fluid
  const waffle = data.waffle.childImageSharp.fluid
  const baguette = data.baguette.childImageSharp.fluid
  const croissant = data.croissant.childImageSharp.fluid
  const shareBackground = data.shareBackground.childImageSharp.fluid
  const mug = data.shareBackground.childImageSharp.fluid
  const instagram = data.instagramBig.childImageSharp.fluid
  const imgOne = data.imgOne.childImageSharp.fluid
  const imgTwo = data.imgTwo.childImageSharp.fluid
  const imgThree = data.imgThree.childImageSharp.fluid
  const imgFour = data.imgFour.childImageSharp.fluid
  const imgFive = data.imgFive.childImageSharp.fluid
  const imgSix = data.imgSix.childImageSharp.fluid
  const menuBackground = data.menuBackground.childImageSharp.fluid
  const contactBackground = data.contactBackground.childImageSharp.fluid
  const info = data.info.childImageSharp.fluid
  const siguenos = data.siguenos.childImageSharp.fluid
  const fbLogo = data.facebook.childImageSharp.fluid
  const instagramLogo = data.instagramLogo.childImageSharp.fluid
  const waffleTitle = data.waffleTitle.childImageSharp.fluid
  const menuWaffle = data.menuWaffle.childImageSharp.fluid

  const mainSliderContent = [
    {
      img: logoGold,
      title: 'Nueva Imagen',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa qui, fugiat enim, eveniet error neque deleniti temporibus, inventore velit alias quod ratione aliquam. Voluptates voluptas provident animi accusamus at quasi'
    },
    {
      img: dishes,
      title: 'Nuevos Platillos',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa qui, fugiat enim, eveniet error neque deleniti temporibus, inventore velit alias quod ratione aliquam. Voluptates voluptas provident animi accusamus at quasi',
      uri: '/menu/',
    }
  ]

  const menuSlider = [
    {
      img: waffleTitle,
      dish: menuWaffle,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa qui, fugiat enim, eveniet error neque deleniti temporibus, inventore velit alias quod ratione aliquam. Voluptates voluptas provident animi accusamus at quasi'
    },
  ]
  
  return (
    <Layout>
      <SEO title="Home" />
      <Slider isFullVh={true} sliderContent={mainSliderContent} coverImage={mainSliderBackground} />
      <div style={{ backgroundImage: `url(${recomendacionesBackground.src})` }} className="p-8 lg:px-40 lg:py-20">
        <div className="md:container">

          <Img className="sm:w-3/5 w-full mx-auto" fluid={recomendacionesTitle} />

          <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-12 py-20">
            <div>
              <div>
                <Img className="lg:h-44 md:h-24" fluid={waffle} />
              </div>
              <h3 className="font-thany lg:text-4xl md:text-xl text-center py-5">
                Waffle de Zarzamora
              </h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vero sit illo, non ex, vel tenetur aliquid cum minus ullam, animi perferendis. Porro explicabo mollitia, odit provident labore libero quaerat.
              </p>
            </div>
            <div>
              <div>
                <Img className="lg:h-44 md:h-24" fluid={croissant} />
              </div>
              <h3 className="font-thany lg:text-4xl md:text-xl text-center py-5">
                Croissant
              </h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vero sit illo, non ex, vel tenetur aliquid cum minus ullam, animi perferendis. Porro explicabo mollitia, odit provident labore libero quaerat.
              </p>
            </div>
            <div>
              <div>
                <Img className="lg:h-44 md:h-24" fluid={baguette} />
              </div>
              <h3 className="font-thany lg:text-4xl md:text-xl text-center py-5">
                Baguette Italiano
              </h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vero sit illo, non ex, vel tenetur aliquid cum minus ullam, animi perferendis. Porro explicabo mollitia, odit provident labore libero quaerat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-no-repeat bg-center md:bg-right p-8 lg:px-40 lg:py-20"
        style={{
          backgroundImage: `url(${shareBackground.src})`
        }}
      >
        <div className="flex items-center justify-center text-2xl md:text-6xl">
          <div className="md:w-28 w-12">
            <Img className="w-full" fluid={instagram} />
          </div>
          <div className="flex items-center ml-2 md:ml-3">
            <h2 className="font-horseback leading-6 md:leading-none font-black uppercase"><span className="block text-xl md:text-5xl font-bold">Comparte tus</span>Experiencias</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-11 mt-8">
          <Img fluid={imgOne} />
          <Img fluid={imgTwo} />
          <Img fluid={imgThree} />
          <Img fluid={imgFour} />
          <Img fluid={imgFive} />
          <Img fluid={imgSix} />
        </div>
      </div>
      <Slider type={'menu'} title={'Menú'}  isFullVh={true} sliderContent={menuSlider} coverImage={menuBackground} />
      <div style={{ backgroundImage: `url(${contactBackground.src})` }} className="p-8 lg:px-40 lg:py-20">
        <h2 className="font-horseback text-5xl sm:text-7xl font-bold">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-11">
          <div>
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                      <label htmlFor="name" className="font-thany block sm:text-4xl font-medium text-gray-700">Name</label>
                      <input type="text" name="name" id="name" autoComplete="given-name"
                        className="h-12 mt-1 bg-black text-white opacity-50 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email" className="font-thany block sm:text-4xl font-medium text-gray-700">Correo</label>
                      <input type="text" name="email" id="email" autoComplete="email"
                        className="h-12 mt-1 bg-black opacity-50 text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="tel" className="font-thany block sm:text-4xl font-medium text-gray-700">Teléfono</label>
                      <input type="text" name="tel" id="tel" autoComplete="tel"
                        className="h-12 mt-1 bg-black opacity-50 text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="message" className="font-thany block sm:text-4xl font-medium text-gray-700">Mensaje</label>
                      <textarea type="text" name="message" id="message" 
                        className="h-24 mt-1 bg-black text-white opacity-50 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                  <button style={{backgroundColor: '#d4a559'}} type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="sm:px-16 text-center sm:text-left">
            <Img className="sm:w-3/4" fluid={info} />
            <p className="mt-4 ml-3 text-lg font-semibold">
              Av. Nichupté manzana 7, <br/>
              lt 50, CP. 77503.<br/>
              Cancún Quintana Roo.<br/>
            </p>
            <p className="mt-4 ml-3 text-lg font-semibold">
              Estamos abiertos de <br/>
              8 am a 11 pm.<br/>
            </p>
            <Img className="w-44 m-auto sm:mx-0 my-4" fluid={siguenos} />
            <a target="_Blank" href="instagram.com" className="w-8 inline-flex mx-4">
              <Img className="w-full" fluid={instagramLogo} />
            </a>
            <a target="_Blank" href="facebook.com" className="w-8 inline-flex">
              <Img className="w-full" fluid={fbLogo} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    home_slider_background: file(relativePath: {eq: "background-cafe.png"}) {
      childImageSharp{
        fluid(maxWidth: 1440, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoGold: file(relativePath: {eq: "cafe-del-profe-gold.png"}) {
      childImageSharp{
        fluid(maxWidth: 800, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    recomendaciones: file(relativePath: {eq: "recomendaciones-title.png"}) {
      childImageSharp{
        fluid(maxWidth: 1100, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    recomendacionesBackground: file(relativePath: {eq: "blocks-background.png"}) {
      childImageSharp{
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    waffle: file(relativePath: {eq: "Waffle_zarzamora.png"}) {
      childImageSharp{
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    croissant: file(relativePath: {eq: "croissant.png"}) {
      childImageSharp{
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    baguette: file(relativePath: {eq: "baguette.png"}) {
      childImageSharp{
        fluid(maxWidth: 360, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    shareBackground: file(relativePath: {eq: "share-background.png"}) {
      childImageSharp{
        fluid(maxWidth: 1920, quality: 80){
          ...GatsbyImageSharpFluid
        }
      }
    }
    mug: file(relativePath: {eq: "velvet.png"}) {
      childImageSharp{
        fluid(maxWidth: 300, quality: 80){
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagramBig: file(relativePath: {eq: "instagram-big.png"}) {
      childImageSharp{
        fluid(maxWidth: 150, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    imgOne: file(relativePath: {eq: "chocolate.png"}) {
                    childImageSharp{
                    fluid(maxWidth: 300, quality: 80){
                    ...GatsbyImageSharpFluid
                  }
      }
    }
    imgTwo: file(relativePath: {eq: "coffe.png"}) {
      childImageSharp{
        fluid(maxWidth: 300, quality: 80){
          ...GatsbyImageSharpFluid
        }
      }
    }
    imgThree: file(relativePath: {eq: "promo.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 300, quality: 80){
          ...GatsbyImageSharpFluid
        }
      }
    }
    imgFour: file(relativePath: {eq: "pesto.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 300, quality: 80){
          ...GatsbyImageSharpFluid
        }
      }
    }
    imgFive: file(relativePath: {eq: "hallo-muertos.png"}) {
      childImageSharp{
        fluid(maxWidth: 300, quality: 80){
          ...GatsbyImageSharpFluid
        }
      }
    }
    imgSix: file(relativePath: {eq: "post.png"}) {
      childImageSharp{
        fluid(maxWidth: 300, quality: 80){
          ...GatsbyImageSharpFluid
        }
      }
    }
    menuBackground: file(relativePath: {eq: "fondo-menu.png"}) {
      childImageSharp{
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    contactBackground: file(relativePath: {eq: "mosaicos.png"}) {
      childImageSharp{
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    info: file(relativePath: {eq: "info-contact.png"}) {
      childImageSharp{
        fluid(maxWidth: 320, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    siguenos: file(relativePath: {eq: "siguenos.png"}) {
      childImageSharp{
        fluid(maxWidth: 200, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagramLogo: file(relativePath: {eq: "instagram.png"}) {
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
    dishes: file(relativePath: {eq: "waffle.png"}) {
      childImageSharp{
        fluid(maxWidth: 700, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    waffleTitle: file(relativePath: {eq: "titlegold.png"}) {
      childImageSharp{
        fluid(maxWidth: 600, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    menuWaffle: file(relativePath: {eq: "menu-waffle.png"}) {
      childImageSharp{
        fluid(maxWidth: 900, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
