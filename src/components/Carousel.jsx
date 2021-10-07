import React, {useState} from 'react'
import Slider from "react-slick";
import UseWindowsize from './UseWindowsize';

/**
 * Componente para crear slider de banner agregados desde el formulario
 * @param {object} settings Propiedades de configuración para el slider
 * @returns Slider
 */
const Carousel = () => {

    let settings = {
        arrows: true,
        dots: true,
        // autoplay: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    //Lista de Eventos a mostrar en el slider
    const items = [
        {
            nameEvent: 'Evento decembrinas 2021',
            dateEvent: '10-12-2021',
            timeEvent: '18:00',
            url: 'http://demo.com',
            imageDesktop: 'https://picsum.photos/2340/700?grayscale',
            imageTablet: 'https://picsum.photos/1440/1080?grayscale',
            imageMobile: 'https://picsum.photos/1920/1080?grayscale'
        },
        {
            nameEvent: 'Evento del globo 2022',
            dateEvent: '23-02-2022',
            timeEvent: '3:00',
            url: 'http://globo.com',
            imageDesktop: 'http://placekitten.com/g/2340/700',
            imageTablet: 'http://placekitten.com/g/1440/1080',
            imageMobile: 'http://placekitten.com/g/1920/1080', 
        },
        {
            nameEvent: 'Evento 2022',
            dateEvent: '10-06-2022',
            timeEvent: '18:00',
            url: 'http://demo.com',
            imageDesktop: 'https://picsum.photos/2340/700/?blur',
            imageTablet: 'https://picsum.photos/1440/1080/?blur',
            imageMobile: 'https://picsum.photos/1920/1080/?blur',
        },
    ]

    //const size = UseWindowsize();

    // if (size.width < 768) {
    //     console.log('mobile')
    //     setImage('http://placekitten.com/g/1920/1080')
    // } else if(size.width < 992){
    //     console.log('tablet')
    //     setImage('http://placekitten.com/g/1440/1080')
    // } else if(size.width > 1200) {
    //     console.log('desktop')
    //     setImage('http://placekitten.com/g/2340/700')
    // }

    return (
        <div className="carousel-home">
            <Slider {...settings}>
                {items.map((item, index) => {
                    return(
                        <div className='slide-item' key='{index}'>
                            <img className='imgDesktop' src={item.imageDesktop} alt={item.nameEvent} />
                            <img className='imgTablet' src={item.imageTablet} alt={item.nameEvent} />
                            <img className='imgMobile' src={item.imageMobile} alt={item.nameEvent} />
                            <div className="description-slide-item">
                                <h2>{item.nameEvent}</h2>
                                <small>Fecha: {item.dateEvent}</small>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel
