"use client"
import './global.scss';

import Spline from '@splinetool/react-spline';

import Nav from "../components/nav/Nav";

import {useEffect, useState} from "react";

import {Swiper, SwiperSlide} from 'swiper/react';
// import required modules
import {Autoplay, EffectCoverflow, Navigation, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/navigation';

import {HoloCard} from "bereact-ui/Card";
import 'bereact-ui/style.css';

import Image from "next/image";


import htmlCardImage from '../img/html-card.jpg';
import cssCardImage from '../img/css-card.jpg';
import scssCardImage from '../img/scss-card.jpg';
import jsCardImage from '../img/js-card.jpg';
import tsCardImage from '../img/ts-card.jpg';
import reactCardImage from '../img/react-card.jpg';
import reactNativeCardImage from '../img/reactNative-card.jpg';
import sqlCardImage from '../img/sql-card.jpg';
import gitCardImage from '../img/git-card.jpg';
import nodeCardImage from '../img/node-card.jpg';
import expCardImage from '../img/exp-card.jpg';

import htmlPatternImage from '../img/html-pattern.jpg';
import cssPatternImage from '../img/css-pattern.jpg';
import scssPatternImage from '../img/scss-pattern.jpg';
import jsPatternImage from '../img/js-pattern.jpg';
import tsPatternImage from '../img/ts-pattern.jpg';
import reactPatternImage from '../img/react-pattern.jpg';
import reactNativePatternImage from '../img/reactNative-pattern.jpg';
import sqlPatternImage from '../img/sql-pattern.jpg';
import gitPatternImage from '../img/git-pattern.jpg';
import nodePatternImage from '../img/node-pattern.jpg';
import expPatternImage from '../img/exp-pattern.jpg';
import {comp, descComp} from "@/utils/constants";


export default function Home() {

    const [date, setDate] = useState<string>("");
    const [scale, setScale] = useState(1);
    const [offsetY, setOffsetY] = useState(0);
    const [selectedComp, setSelectedComp] = useState(0);
    const [showTextAnimation, setShowTextAnimation] = useState(false);
    // Fonction pour gérer l'événement de scroll

    useEffect(() => {
        setInterval(() => {
            setDate(new Date().toLocaleString());
        }, 1000);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const newScale = Math.max(0.8, 1 - (window.scrollY / window.innerHeight) * 0.2);
            setScale(newScale);
        };

        // Ajouter un écouteur d'événement pour redimensionner la fenêtre
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleResize);

        // Appel initial pour définir l'échelle initiale
        handleResize();

        // Nettoyage de l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleResize);
        };
    }, []);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    function handleCompChange(activeIndex: number) {

        setShowTextAnimation(true);

        setTimeout(() => {
            setShowTextAnimation(false);
            setSelectedComp(activeIndex)
        }, 500);
    }

    return (
        <main>
            <Nav/>

            <section className={"mainSection"}>
                {/* ToDO: IF MOBILE => REMOVE SLINE (LAG)*/}
                <Spline scene="https://prod.spline.design/dI-gsDDjICl92avH/scene.splinecode"/>

                <h1 style={{
                    position: 'fixed',
                    top: `calc(50vh - 250px + ${offsetY / 2}px)`,
                    transform: `translate3d(0px, ${-offsetY / 2}px, 0px) scale(${scale})`,
                }}>Bonjour, je m'appelle Nathan</h1>
                <h2 style={{
                    position: 'fixed',
                    top: `calc(50vh - 150px + ${offsetY / 2}px)`,
                    transform: `translate3d(0px, ${-offsetY / 2}px, 0px) scale(${scale})`,
                }}>Développeur Web Junior.</h2>
                <p className={'desc'} style={{
                    position: 'fixed',
                    top: `calc(50vh - 25px + ${offsetY / 2}px)`,
                    transform: `translate3d(0px, ${-offsetY / 2}px, 0px) scale(${scale})`,
                }}> Je développe des sites web et des applications mobiles accessibles,
                    performants
                    et personnalisés de A à Z.</p>
                <p className={'location'}>Belgique Liège : {date}</p>
                <p className={'dispo'}><span>&nbsp;</span> disponible </p>

            </section>


            <section className={"compSection"} id={'comp'}>
                <h2>Mes Compétences</h2>
                <div className={'sliderContener'}>
                    <Swiper
                        autoplay={false}
                        navigation
                        effect="coverflow"
                        pagination={{
                            el: "#containerForBullets",
                            type: "bullets",
                            bulletClass: "swiper-custom-bullet",
                            bulletActiveClass: "swiper-custom-bullet-active",
                            clickable: true,
                        }}
                        scrollbar={{draggable: true}}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false
                        }}
                        centeredSlides={true}
                        slidesPerView={3}
                        onActiveIndexChange={(selected) => handleCompChange(selected.activeIndex)}
                        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    >

                        <SwiperSlide style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}><HoloCard
                            size={250}
                            content={<Image src={htmlCardImage} alt={'html logo'}/>}
                            pattern={htmlPatternImage.src}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            size={250}
                            content={<Image src={cssCardImage} alt={'css logo'}/>}
                            pattern={cssPatternImage.src}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            size={250}
                            content={<Image src={scssCardImage} alt={'scss logo'}/>}
                            pattern={scssPatternImage.src}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            size={250}
                            content={<Image src={jsCardImage} alt={'javascript logo'}/>}
                            pattern={jsPatternImage.src}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            size={250}
                            content={<Image src={tsCardImage} alt={'typescript logo'}/>}
                            pattern={tsPatternImage.src}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            size={250}
                            content={<Image src={reactCardImage} alt={'react logo'}/>}
                            pattern={reactPatternImage.src}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            size={250}
                            content={<Image src={reactNativeCardImage} alt={'react native logo'}/>}
                            pattern={reactNativePatternImage.src}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            size={250}
                            content={<Image src={sqlCardImage} alt={'sql logo'}/>}
                            pattern={sqlPatternImage.src}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            size={250}
                            content={<Image src={gitCardImage} alt={'github logo'}/>}
                            pattern={gitPatternImage.src}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            size={250}
                            content={<Image src={nodeCardImage} alt={'node logo'}/>}
                            pattern={nodePatternImage.src}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            size={250}
                            content={<Image src={expCardImage} alt={'express logo'}/>}
                            pattern={expPatternImage.src}/></SwiperSlide>
                    </Swiper>
                    <div id="containerForBullets"></div>

                    <div className={'textContenerComp'}>
                        <p className={`titleComp ${showTextAnimation ? 'fadeOut' : 'fadeIn'}`}>{comp[selectedComp]}</p>
                        <p className={`descComp ${showTextAnimation ? 'fadeOut' : 'fadeIn'}`}>{descComp[comp[selectedComp]]}</p>
                    </div>

                </div>

            </section>

            <section className={"expSection"} id={'exp'}>

            </section>

            <section className={"proSection"} id={'pro'}>

            </section>

            <section className={"cvSection"} id={'cv'}>

            </section>

            <section className={"contactSection"} id={'contact'}>

            </section>

        </main>
    );
}
