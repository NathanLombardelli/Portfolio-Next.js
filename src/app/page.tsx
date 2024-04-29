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

import csharpCardImage from '../img/csharp-card.jpg';
import htmlCardImage from '../img/html-card.jpg';
import cssCardImage from '../img/css-card.jpg';
import sqlCardImage from '../img/sql-card.jpg';
import {comp, descComp} from "@/utils/constants";


export default function Home() {

    const [date, setDate] = useState<string>("");
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

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    const scale = Math.max(0.8, 1 - (offsetY / window.innerHeight) * 0.2);

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
                <Spline scene="https://prod.spline.design/dI-gsDDjICl92avH/scene.splinecode"/>

                <h1 style={{
                    position: 'fixed',
                    top: `calc(50vh - 250px + ${offsetY / 2}px)`,
                    transform: `translate3d(0px, ${-offsetY / 2}px, 0px) scale(${scale})`,
                }}>Salut , je suis Nathan</h1>
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
                            content={<Image height={300} src={htmlCardImage} alt={'img'}/>}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            content={<Image height={300} src={csharpCardImage} alt={'img'}/>}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            content={<Image height={300} src={cssCardImage} alt={'img'}/>}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            content={<Image height={300} src={sqlCardImage} alt={'img'}/>}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            content={<Image height={300} src={sqlCardImage} alt={'img'}/>}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            content={<Image height={300} src={sqlCardImage} alt={'img'}/>}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            content={<Image height={300} src={sqlCardImage} alt={'img'}/>}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            content={<Image height={300} src={sqlCardImage} alt={'img'}/>}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            content={<Image height={300} src={sqlCardImage} alt={'img'}/>}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            content={<Image height={300} src={sqlCardImage} alt={'img'}/>}/></SwiperSlide>
                        <SwiperSlide><HoloCard
                            content={<Image height={300} src={sqlCardImage} alt={'img'}/>}/></SwiperSlide>
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

            <section className={"cvSection"} id={'cv'}>

            </section>

            <section className={"contactSection"} id={'contact'}>

            </section>

        </main>
    );
}
