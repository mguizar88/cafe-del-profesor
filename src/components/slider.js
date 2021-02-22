import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"



const Slider = class extends React.Component {

    state = {
        pos: 0,
        slideCount: 0
    }

    componentDidMount() {
        const slideCount = this.props.sliderContent.length
        this.setState({
            slideCount: slideCount
        })
        window.addEventListener("resize", this.setTransform)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setTransform)
    }

    setTransform() {
        const slides = document.querySelector('.slides')
        slides.style.transform = 'translate3d(' + (-this.state.pos * slides.offsetWidth) + 'px,0,0)';
    }

    prev() {
        const pos = Math.max(this.state.pos - 1, 0);
        this.setState({
            pos: pos
        })   
        this.setTransform();
    }

    next() {
        const pos = Math.min(this.state.pos + 1, this.state.slideCount - 1);
        this.setState({
            pos: pos
        })
        this.setTransform();
    }

    render () {

        const type = this.props.type || 'info'
        const isFullVh = this.props.isFullVh
        const coverImage = this.props.coverImage
        const title = this.props.title
        const contentImage = this.props.contentImage
        const description = this.props.description
        const slides = this.props.sliderContent
        
        return(
            <>
                <div 
                    className={`${isFullVh? 'h-screen' : ''} bg-cover bg-no-repeat bg-center`}
                    style={{
                        backgroundImage: `url(${coverImage? coverImage.src : ''})`
                    }}    
                >
                    <div className="overflow-hidden h-full">
                        <div className="slides transition duration-1000 h-full flex flex-nowrap">
                            {
                                slides.map( (slide, index) => (  
                                    <div key={index} className="inline-flex flex-none h-full w-full justify-center">
                                        <div className={`${type === 'menu'? 'grid-rows-2 sm:grid-cols-4': 'sm:grid-cols-2'} grid grid-cols-1 p-8 gap-6 lg:gap-12 md:gap-6 max-w-screen-lg content-center`}>
                                            { 
                                                type === 'menu'?
                                                    <>
                                                        <div className="sm:col-span-2"><Img fluid={slide.img} /></div>
                                                        <div className="sm:col-span-2">
                                                            <p className="text-white text-justify sm:text-left">
                                                                {slide.text}
                                                            </p>
                                                        </div>
                                                        <div className="sm:col-span-2 sm:col-start-2"><Img fluid={slide.dish} /></div>
                                                    </>
                                                :   <>
                                                
                                                    <div>
                                                        <Img fluid={slide.img} />
                                                    </div>
                                                    <div className="text-white">
                                                        { slide.title? <h2 className="sm:text-5xl text-2xl text-center sm:text-left font-bold font-horseback">{ slide.title }</h2> : '' }
                                                        { slide.text? <p className="mt-4 text-justify sm:text-left">{ slide.text }</p> : '' }
                                                        { slide.uri? <a href={slide.uri}>Ver más</a> : ''}
                                                    </div>
                                                    </>
                                            }
                                        </div>
                                    </div>        
                                ))
                            } 
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Slider